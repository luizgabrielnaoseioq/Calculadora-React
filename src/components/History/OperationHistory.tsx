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

  async function exportCsv() {
    const metaData = [
      "Histórico da Calculadora",
      `Gerado em: ${new Date().toLocaleString("pt-br")}`,
      "",
    ];
    const header = "Operação";
    const rows = history.map((item) => `${item}`);
    const csvContent = [...metaData, header, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "hisotrico.csv");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <Card className="w-full py-10 px-8 max-h-[615px] overflow-y-auto">
      <Text as="h1" variant="heading" className="mb-4 overflow-auto">
        Histórico de Operações
      </Text>

      <div className="flex flex-col items-start">
        <button
          onClick={clearHistory}
          className="text-sm text-red-400 hover:text-red-600 transition cursor-pointer"
        >
          Limpar Historico
        </button>
        <Text
          as="button"
          className="text-[15px] text-violet-300 hover:text-violet-600 transition cursor-pointer"
          onClick={() => exportCsv()}
        >
          Exportar histórico
        </Text>
      </div>

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
