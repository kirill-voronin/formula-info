import { scheduleRaceNotifications } from "@/entities/race";
import { api, RaceDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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

  useEffect(() => {
    if (data?.races && data.races.length > 0) {
      scheduleRaceNotifications(data.races);
    }
  }, [data?.races]);

  return {
    schedule: data?.races ?? [],
    isLoading,
    error,
  };
};
