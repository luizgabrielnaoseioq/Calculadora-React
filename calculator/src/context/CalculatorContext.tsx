import React, { createContext, useEffect, useState } from "react";

export type CalculatorContextType = {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
  clearHistory: () => void;
};

export const CalculatorContext = createContext<CalculatorContextType | null>(
  null
);

type Props = {
  children: React.ReactNode;
};

const STORAGE_KEY = "history";

export function CalculatorProvider({ children }: Props) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setHistory(JSON.parse(saved));
    } catch {
      setHistory([]);
    }
  }, []);

  function updateHistory(operation: string, parsedResult: string) {
    setHistory((prev) => {
      const next = [...prev, `${operation}=${parsedResult}`];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // noop
      }
      return next;
    });
  }

  function clearHistory() {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // noop
    }
  }

  return (
    <CalculatorContext.Provider
      value={{ history, updateHistory, clearHistory }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
