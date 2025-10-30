import { RaceDTO } from "@/shared/api";
import { create, StateCreator } from "zustand";

interface State {
  nextRace: Partial<RaceDTO> | null;
  lastRace: Partial<RaceDTO> | null;
}

interface Actions {
  setNextRace: (nextRace: State["nextRace"]) => void;
  setLastRace: (lastRase: State["lastRace"]) => void;
}

const store: StateCreator<Actions & State> = (set) => ({
  nextRace: null,
  lastRace: null,
  setNextRace: (nextRace) => set(() => ({ nextRace: nextRace })),
  setLastRace: (lastRace) => set(() => ({ lastRace: lastRace })),
});

const useStore = create<Actions & State>()(store);

export const useNextRace = () => useStore((state) => state.nextRace);
export const useLastRace = () => useStore((state) => state.lastRace);

export const useSetNextRace = () => useStore.getState().setNextRace;
export const useSetLastRace = () => useStore.getState().setLastRace;
