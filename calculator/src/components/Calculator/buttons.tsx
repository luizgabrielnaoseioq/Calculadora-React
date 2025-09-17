import type { ReactNode } from "react";
import { Calculator, Delete, History, PencilRuler } from "lucide-react";

export type ButtonConfig = {
  input: string;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "primary";
};

export const buttons: ButtonConfig[][] = [
  [
    { input: "history", icon: <History /> },
    { input: "metric", icon: <PencilRuler /> },
    { input: "cient", icon: <Calculator /> },
  ],
  [
    { input: "C", className: "flex-1 h-16 text-red-400" },
    { input: "cl", icon: <Delete /> },
    { input: "/", variant: "primary" },
  ],
  [
    { input: "7" },
    { input: "8" },
    { input: "9" },
    { input: "*", variant: "primary" },
  ],
  [
    { input: "4" },
    { input: "5" },
    { input: "6" },
    { input: "-", variant: "primary" },
  ],
  [
    { input: "1" },
    { input: "2" },
    { input: "3" },
    { input: "+", variant: "primary" },
  ],
  [
    { input: "0", className: "flex-1 h-16" },
    { input: "," },
    { input: "=", className: "w-16 h-16 bg-[#7f45e2]" },
  ],
];
