import React from "react";
import { Text } from "../ui/Text";

type Props = {
  operation: string;
  result: string;
};

export function CalculatorDisplay({ operation, result }: Props) {
  return (
    <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
      <Text
        as="div"
        variant="muted"
        className="flex items-center justify-end h-7"
      >
        {result && operation}
      </Text>
      <div className="flex items-center justify-between h-9">
        <Text variant="muted">=</Text>
        <Text variant="blast">{result || operation}</Text>
      </div>
    </div>
  );
}
