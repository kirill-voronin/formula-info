import { api, RaceDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSetLastRace } from "../model/store";

interface LastRaceResultsResponse {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  races: RaceDTO;
}

const useGetLastRaceResults = () => {
  const setLastRace = useSetLastRace();

  const fetchLastRaceResults = async (): Promise<LastRaceResultsResponse> => {
    const response = await api.get("/current/last/race");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["lastRaceResults"],
    queryFn: fetchLastRaceResults,
  });

  useEffect(() => {
    if (!data?.races) return;
    setLastRace(data.races);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    isLoading,
    error,
  };
};

export default useGetLastRaceResults;
