import { ApiProvider } from "@/shared/api";
import { ThemeProvider } from "@/shared/ui";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApiProvider>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </ApiProvider>
  );
}
