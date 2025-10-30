import { api, DriverChampionshipEntryDTO } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSetDriverStanding } from "../model/store";

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
  const setDriverStanding = useSetDriverStanding();

  const fetchDriversStanding = async (): Promise<DriversChampionshipResponse> => {
    const response = await api.get("/current/drivers-championship");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["driversStanding"],
    queryFn: fetchDriversStanding,
  });

  useEffect(() => {
    if (!data) return;
    setDriverStanding(data.drivers_championship ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    isLoading,
    error,
  };
};
