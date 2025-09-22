import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function TogleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-colors-scheme: dark)").matches) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <div className="">
        <button
          onClick={() => setIsDark(!isDark)}
          className="h-10 w-10 bg-violet-400 flex flex-col items-center rounded-2xl"
        >
          {isDark ? (
            <Moon className="w-7 h-7 mt-1.5" />
          ) : (
            <Sun className="w-7 h-7 mt-1.5" />
          )}
        </button>
      </div>
    </>
  );
}
