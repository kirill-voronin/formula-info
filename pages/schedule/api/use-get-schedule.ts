import { api, RaceDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

interface ScheduleResponse {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  races: RaceDTO[];
}

export const useGetSchedule = () => {
  const fetchSchedule = async (): Promise<ScheduleResponse> => {
    const response = await api.get("/current");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["schedule"],
    queryFn: fetchSchedule,
  });

  return {
    schedule: data?.races ?? [],
    isLoading,
    error,
  };
};
