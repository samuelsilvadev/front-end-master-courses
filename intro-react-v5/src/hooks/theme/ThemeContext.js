import { createContext, useContext } from "react";

export const ThemeContext = createContext([{ buttonColor: "green" }, () => {}]);

export function useTheme() {
  return useContext(ThemeContext);
}
