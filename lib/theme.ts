export type Theme = "default" | "matrix";

export function nextTheme(theme: Theme): Theme {
  return theme === "default" ? "matrix" : "default";
}
