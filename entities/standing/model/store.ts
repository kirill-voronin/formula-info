import { DriverChampionshipEntryDTO } from "@/shared/api";
import { create, StateCreator } from "zustand";

interface State {
  driverStanding: DriverChampionshipEntryDTO[] | null;
}

interface Actions {
  setDriverStanding: (driverStanding: State["driverStanding"]) => void;
}

const store: StateCreator<Actions & State> = (set) => ({
  driverStanding: null,
  setDriverStanding: (driverStanding) => set(() => ({ driverStanding: driverStanding })),
});

const useStore = create<Actions & State>()(store);

export const useDriverStanding = () => useStore((state) => state.driverStanding);
export const useSetDriverStanding = () => useStore.getState().setDriverStanding;
