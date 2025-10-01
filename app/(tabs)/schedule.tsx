import { Schedule as SchedulePage } from "@/pages/schedule";
import { ApiProvider } from "@/shared/api";

export default function Schedule() {
  return (
    <ApiProvider>
      <SchedulePage />
    </ApiProvider>
  );
}
