import { useContext, useState } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

type UseCalculatorReturn = {
  operation: string;
  result: string;
  doOperation: (input: string) => void;
};

export function useCalculator(): UseCalculatorReturn {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const ctx = useContext(CalculatorContext);

  if (!ctx) {
    throw new Error(
      "useCalculator deve ser usado dentro do CalculatorProvider"
    );
  }

  const { updateHistory } = ctx;

  function doOperation(input: string) {
    const operators = ["+", "-", "*", "/"];
    const lastChar = operation.slice(-1);

    if (input === "C") {
      setOperation("");
      setResult("");
      return;
    }

    if (input === "cl") {
      setOperation((prev) => prev.slice(0, -1));
      return;
    }

    if (input === "=") {
      try {
        const sanitized = operation.replace(/,/g, ".");
        let operationResult = eval(sanitized);
        let result: number = operationResult;
        if (operationResult.toString().includes(".")) {
          const decimalCase = operationResult.toString().split(".")[1].length;
          if (decimalCase > 2) {
            result = parseFloat(operationResult.toFixed(2));
          }
        }

        const parsedResult = result.toLocaleString("pt-br").toString();

        setResult(parsedResult);
        updateHistory(operation, parsedResult);
      } catch {
        setResult("Erro na operação.");
      }
      return;
    }

    // operador
    if (operators.includes(input)) {
      if (!operation) {
        if (input === "-") {
          setOperation("-");
        }
        return;
      }

      if (operators.includes(lastChar)) {
        setOperation((prev) => prev.slice(0, -1) + input);
      } else {
        setOperation((prev) => prev + input);
      }
      return;
    }

    if (input === "," && lastChar !== ",") {
      setOperation((prev) => prev + input);
      return;
    }

    if (result) {
      setOperation(input);
      setResult("");
      return;
    }

    setOperation((prev) => prev + input);
  }

  return {
    operation,
    result,
    doOperation,
  };
}
