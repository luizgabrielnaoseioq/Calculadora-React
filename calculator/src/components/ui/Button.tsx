import {
  type ButtonHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { Text } from "./Text";

type Variant = "default" | "primary";

export type ButtonProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants: Record<Variant, string> = {
  default: "bg-(--background)",
  primary: "bg-(--primary)",
};

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-gradient-to-b from-black/5 to-white/5 hover:from-black/10 hover:to-white/10 shadow-custom ${buttonVariants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </Text>
  );
}
