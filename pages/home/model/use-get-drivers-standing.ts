import { api, DriverChampionshipEntryDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

interface DriversChampionshipResponse {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  championshipId: string;
  drivers_championship: DriverChampionshipEntryDTO[];
}

export const useGetDriversStanding = () => {
  const fetchDriversStanding = async (): Promise<DriversChampionshipResponse> => {
    const response = await api.get("/current/drivers-championship");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["driversStanding"],
    queryFn: fetchDriversStanding,
  });
  return {
    driversStanding: data?.drivers_championship ?? [],
    isLoading,
    error,
  };
};
