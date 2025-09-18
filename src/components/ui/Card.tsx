import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`bg-[var(--background)] shadow-custom rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
