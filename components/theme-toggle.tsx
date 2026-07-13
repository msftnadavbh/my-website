"use client";

import { useEffect, useState } from "react";
import { nextTheme, type Theme } from "@/lib/theme";

const storageKey = "nadav-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("default");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "matrix"
        ? "matrix"
        : "default",
    );
  }, []);

  function toggleTheme() {
    const next = nextTheme(theme);
    if (next === "matrix") {
      document.documentElement.dataset.theme = "matrix";
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem(storageKey, next);
    setTheme(next);
  }

  return (
    <button
      aria-pressed={theme === "matrix"}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span aria-hidden="true">▦</span> matrix
    </button>
  );
}
