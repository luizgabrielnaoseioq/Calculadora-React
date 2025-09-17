import { useContext } from "react";
import { Card } from "../ui/Card";
import { Text } from "../ui/Text";
import { CalculatorContext } from "../../context/CalculatorContext";

export function OperationHistory() {
  const ctx = useContext(CalculatorContext);
  if (!ctx) {
    return null;
  }
  const { history, clearHistory } = ctx;

  return (
    <Card className="w-full py-10 px-8 max-h-[560px] overflow-y-auto">
      <Text as="h1" variant="heading" className="mb-4 overflow-auto">
        Histórico de Operações
      </Text>

      <button
        onClick={clearHistory}
        className="text-sm text-red-400 hover:text-red-600 transition cursor-pointer"
      >
        Limpar Historico
      </button>

      {history.length > 0 ? (
        <ul className="flex flex-col gap-3 mt-4">
          {history.map((value, index) => (
            <Text key={`item-${index}`} as="li">
              {value}
            </Text>
          ))}
        </ul>
      ) : (
        <Text as="p" variant="muted" className="mt-4">
          Nenhuma operação recente.
        </Text>
      )}
    </Card>
  );
}
