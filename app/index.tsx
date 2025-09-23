import { Home } from "@/pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <Home />
    </QueryClientProvider>
  );
}
