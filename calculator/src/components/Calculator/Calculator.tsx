import { Card } from "../ui/Card";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { Button } from "../ui/Button";
import { buttons, type ButtonConfig } from "./buttons";
import { useCalculator } from "../../hooks/useCalculator";

export function Calculator() {
  const { operation, result, doOperation } = useCalculator();

  function handleInputClick(input: string) {
    doOperation(input);
  }

  function testeIcon(props: ButtonConfig) {
    switch (props.input) {
      case "cl":
        return props.icon;
      case "history":
        return props.icon;
      default:
        return props.input;
    }
  }

  return (
    <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
      <CalculatorDisplay operation={operation} result={result} />

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
                {testeIcon(button)}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
