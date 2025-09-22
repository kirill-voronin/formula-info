export interface ScheduleEventDTO {
  date: string;
  time: string;
}

export interface ScheduleDTO {
  race: ScheduleEventDTO;
  qualy: ScheduleEventDTO;
  fp1: ScheduleEventDTO;
  fp2: ScheduleEventDTO;
  fp3: ScheduleEventDTO;
  sprintQualy: ScheduleEventDTO;
  sprintRace: ScheduleEventDTO;
}

export interface FastLapDTO {
  fast_lap: string;
  fast_lap_driver_id: string;
  fast_lap_team_id: string;
}

export interface CircuitDTO {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: string;
  lapRecord: string;
  firstParticipationYear: number;
  corners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
}

export interface RaceDTO {
  raceId: string;
  championshipId: string;
  raceName: string;
  schedule: Partial<ScheduleDTO>;
  laps: number;
  round: number;
  url: string;
  fast_lap: Partial<FastLapDTO>;
  circuit: Partial<CircuitDTO>;
  results: Partial<RaceResultDTO>[];
  winner: string;
  teamWinner: string;
}

export interface ChampionshipDTO {
  championshipId: string;
  championshipName: string;
  url: string;
  year: number;
}

export interface DriverDTO {
  driverId: string;
  number: number;
  shortName: string;
  url: string;
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
}

export interface TeamDTO {
  teamId: string;
  teamName: string;
  nationality: string;
  firstAppareance: number;
  constructorsChampionships: number;
  driversChampionships: number;
  url: string;
}

export interface RaceResultDTO {
  position: number;
  points: number;
  grid: number;
  time: string;
  fastLap: number | null;
  retired: boolean | null;
  driver: Partial<DriverDTO>;
  team: Partial<TeamDTO>;
}
