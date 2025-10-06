import React, { createContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "./colors";

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: (scheme: "dark" | "light") => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: "dark" | "light") => setIsDark(scheme === "dark"),
  };

  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
