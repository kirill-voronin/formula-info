import { api, ChampionshipDTO, RaceDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

interface NextRaceResponse {
  api: string;
  url: string;
  total: number;
  season: number;
  round: number;
  championship: Partial<ChampionshipDTO>;
  race: Partial<RaceDTO>[];
}

const useGetNextRace = () => {
  const fetchNextRace = async (): Promise<NextRaceResponse> => {
    const response = await api.get("/current/next");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["nextRace"],
    queryFn: fetchNextRace,
  });

  return {
    race: data?.race[0],
    schedule: data?.race[0].schedule,
    circuit: data?.race[0].circuit,
    isLoading,
    error,
  };
};

export default useGetNextRace;
