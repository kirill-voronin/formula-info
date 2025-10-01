import { RaceResultDTO } from "@/shared/api";
import { theme } from "@/shared/lib";
import { Card, Loading } from "@/shared/ui";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import useGetLastRaceResults from "../api/use-get-last-race-results";
import { podiumColors } from "../config/podiums-colors";

const renderItem: ListRenderItem<Partial<RaceResultDTO>> = ({ item }) => (
  <View style={styles.row}>
    <Text
      style={[
        styles.position,
        { color: podiumColors[item.position as keyof typeof podiumColors] },
      ]}>
      {item.position}.
    </Text>
    <Text style={styles.name}>
      {item.driver?.name?.split("")[0]}. {item.driver?.surname}
    </Text>
    <Text style={styles.team}>{item.team?.teamName}</Text>
    <Text style={styles.number}>#{item.driver?.number}</Text>
  </View>
);

const LastRaceResults = () => {
  const { results, circuit, isLoading } = useGetLastRaceResults();
  const leaders = results.slice(0, 3);

  if (isLoading) {
    return <Loading />;
  }

  if (!results || results.length === 0) {
    return <Text>No results found</Text>;
  }

  return (
    <Card title="Last Race Results">
      <Text style={styles.location}>
        {circuit?.city}, {circuit?.country}
      </Text>
      <FlatList data={leaders} renderItem={renderItem} />
    </Card>
  );
};

export default LastRaceResults;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  location: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  position: {
    fontSize: 16,
    fontWeight: "bold",
    width: 24,
    color: "#1976d2",
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  team: {
    fontSize: 12,
    color: "#555",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginLeft: 8,
  },
});
