import { View } from "react-native";
import LastRaceResults from "./last-race-results";
import NextRaceCard from "./next-race";

export const Home = () => {
  return (
    <View>
      <NextRaceCard />
      <LastRaceResults />
    </View>
  );
};
