import { View } from "react-native";
import { DriversStanding } from "./drivers-standing";
import LastRaceResults from "./last-race-results";
import NextRaceCard from "./next-race";

export const Home = () => {
  return (
    <View>
      <NextRaceCard />
      <LastRaceResults />
      <DriversStanding />
    </View>
  );
};
