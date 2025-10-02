import { RaceResultDTO } from "@/shared/api";
import { Card, Loading } from "@/shared/ui";
import { useTheme } from "@/shared/ui/theme/theme-provider";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import useGetLastRaceResults from "../api/use-get-last-race-results";
import { podiumColors } from "../config/podiums-colors";

const LastRaceResults = () => {
  const { results, circuit, isLoading } = useGetLastRaceResults();
  const leaders = results.slice(0, 3);
  const { colors } = useTheme();

  if (isLoading) {
    return <Loading />;
  }

  if (!results || results.length === 0) {
    return <Text>No results found</Text>;
  }

  const renderItem: ListRenderItem<Partial<RaceResultDTO>> = ({ item }) => (
    <View style={styles.row}>
      <Text
        style={[
          styles.position,
          { color: podiumColors[item.position as keyof typeof podiumColors] },
        ]}>
        {item.position}.
      </Text>
      <Text style={[styles.name, { color: colors.text }]}>
        {item.driver?.name?.split("")[0]}. {item.driver?.surname}
      </Text>
      <Text style={[styles.team, { color: colors.textSecondary }]}>
        {item.team?.teamName}
      </Text>
      <Text style={[styles.number, { color: colors.primary }]}>
        #{item.driver?.number}
      </Text>
    </View>
  );

  return (
    <Card title="Last Race Results">
      <Text style={[styles.location, { color: colors.textSecondary }]}>
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
    marginBottom: 12,
  },
  position: {
    fontSize: 16,
    fontWeight: "bold",
    width: 24,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  team: {
    fontSize: 12,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
});
