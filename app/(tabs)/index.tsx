import { Home } from "@/pages/home";
import { ApiProvider } from "@/shared/api";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <ApiProvider>
      <StatusBar style="dark" />
      <Home />
    </ApiProvider>
  );
}
