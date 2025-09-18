import { Card } from "../ui/Card";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Button } from "../ui/Button";
import { buttons, type ButtonConfig } from "./buttons";
import { useCalculator } from "../../hooks/useCalculator";
import { useState } from "react";
import { OperationHistory } from "../History/OperationHistory";

export function Calculator() {
  const { operation, result, doOperation } = useCalculator();
  const [showHistory, setShowHistory] = useState(false);

  function handleInputClick(input: string) {
    if (input === "history") {
      setShowHistory((prev) => !prev);
    } else {
      doOperation(input);
    }
  }

  function showIcon(props: ButtonConfig) {
    switch (props.input) {
      case "cl":
      case "history":
      case "metric":
      case "cient":
        return props.icon;
      default:
        return props.input;
    }
  }

  function formatNumber(input: string) {
    const number = Number(input);

    if (Number.isInteger(number) && number >= 1000) {
      return number.toLocaleString("pt-br");
    }

    return input;
  }

  console.log("Aqui jas operation: ", operation);
  console.log("Aqui jas result: ", result);
  console.log("Aqui jas doOperation: ", doOperation);

  return (
    <>
      <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
        <CalculatorDisplay
          operation={formatNumber(operation)}
          result={result}
        />

        <div className="flex flex-col gap-3">
          {buttons.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex gap-3">
              {row.map((button) => (
                <Button
                  key={button.input}
                  className={button.className ?? "w-16 h-16"}
                  variant={button.variant}
                  onClick={() => handleInputClick(button.input)}
                >
                  {showIcon(button)}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </Card>
      {showHistory && <OperationHistory />}
    </>
  );
}
