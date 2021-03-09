import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ThemeContextType = [
  Record<string, string>,
  Dispatch<SetStateAction<Record<string, string>>>
];

export const ThemeContext = createContext<ThemeContextType>([
  { buttonColor: "green" },
  () => void {},
]);

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
