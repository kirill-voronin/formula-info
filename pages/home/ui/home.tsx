import { useGetLastRaceResults, useGetNextRace } from "@/entities/race";
import { useGetDriversStanding } from "@/entities/standing";
import { Loading } from "@/shared/ui";
import { StyleSheet, View } from "react-native";
import { DriversStanding } from "./drivers-standing";
import LastRaceResults from "./last-race-results";
import NextRaceCard from "./next-race";

export const Home = () => {
  const { isLoading: isLoadingDriversStanding } = useGetDriversStanding();
  const { isLoading: isLoadingLastRaveResults } = useGetLastRaceResults();
  const { isLoading: isLoadingNextRace } = useGetNextRace();

  if (isLoadingDriversStanding || isLoadingLastRaveResults || isLoadingNextRace) {
    return (
      <View style={styles.loading}>
        <Loading />
      </View>
    );
  }
  return (
    <View>
      <NextRaceCard />
      <LastRaceResults />
      <DriversStanding />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    left: "-5%",
    top: "-5%",
  },
});
