import { api, RaceDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

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
  const fetchLastRaceResults = async (): Promise<LastRaceResultsResponse> => {
    const response = await api.get("/current/last/race");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["lastRaceResults"],
    queryFn: fetchLastRaceResults,
  });

  return {
    results: data?.races.results ?? [],
    circuit: data?.races.circuit ?? {},
    isLoading,
    error,
  };
};

export default useGetLastRaceResults;
