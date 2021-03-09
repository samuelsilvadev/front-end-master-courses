import { createContext, useContext } from "react";

type ThemeContextType = [
  Record<string, string>,
  (theme?: Record<string, string>) => void
];

export const ThemeContext = createContext<ThemeContextType>([
  { buttonColor: "green" },
  () => void {},
]);

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
