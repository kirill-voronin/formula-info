import { RaceDTO } from "@/shared/api";
import { create, StateCreator } from "zustand";

interface State {
  nextRace: Partial<RaceDTO> | null;
}

interface Actions {
  setNextRace: (nextRace: State["nextRace"]) => void;
}

const store: StateCreator<Actions & State> = (set) => ({
  nextRace: null,
  setNextRace: (nextRace) => set(() => ({ nextRace: nextRace })),
});

const useStore = create<Actions & State>()(store);

export const useNextRace = () => useStore((state) => state.nextRace);
export const useSetNextRace = () => useStore.getState().setNextRace;
