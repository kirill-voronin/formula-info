import { ApiProvider } from "@/shared/api";
import { usePushNotification } from "@/shared/lib";
import { ThemeProvider } from "@/shared/ui";
import { Stack } from "expo-router";

export default function RootLayout() {
  usePushNotification();

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
