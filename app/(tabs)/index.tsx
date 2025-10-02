import { Home } from "@/pages/home";
import { useTheme } from "@/shared/ui";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const { isDark, colors } = useTheme();
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} backgroundColor={colors.primary} />
      <Home />
    </>
  );
}
