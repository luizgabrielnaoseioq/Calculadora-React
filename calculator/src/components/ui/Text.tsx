import React, { type JSX } from "react";

type Variant = "default" | "muted" | "heading" | "blast";

export type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const textVariants: Record<Variant, string> = {
  default: "text-xl",
  muted: "text-xl text-var(--text-secondary)",
  heading: "text-2xl",
  blast: "text-3xl",
};

export function Text({
  as = "span",
  variant = "default",
  className = "",
  children,
  ...props
}: TextProps) {
  const Tag = as as any;
  return (
    <Tag className={`${className} ${textVariants[variant]}`} {...props}>
      {children}
    </Tag>
  );
}
