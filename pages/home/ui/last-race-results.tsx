import { useLastRace } from "@/entities/race";
import { RaceResultDTO } from "@/shared/api";
import { Card, TEXT_SIZES } from "@/shared/ui";
import { useTheme } from "@/shared/ui/theme/theme-provider";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

const LastRaceResults = () => {
  const lastRace = useLastRace();
  const results = lastRace?.results ?? [];
  const circuit = lastRace?.circuit;

  const leaders = results.slice(0, 3);
  const { colors } = useTheme();

  if (!results || results.length === 0) {
    return <Text>No results found</Text>;
  }

  const renderItem: ListRenderItem<Partial<RaceResultDTO>> = ({ item }) => (
    <View style={styles.row}>
      <View style={[styles.positionCircle, { backgroundColor: colors.primary }]}>
        <Text style={styles.positionText}>{item.position}</Text>
      </View>
      <Text style={[styles.name, { color: colors.text }]}>
        {item.driver?.name?.split("")[0]}. {item.driver?.surname}
      </Text>
      <Text style={[styles.time, { color: colors.primary }]}>{item.time}</Text>
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
    fontSize: TEXT_SIZES.regular,
    marginBottom: 12,
  },
  positionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  positionText: {
    fontSize: TEXT_SIZES.secondary,
    fontWeight: "bold",
  },
  name: {
    flex: 1,
    fontSize: TEXT_SIZES.regular,
  },
  team: {
    fontSize: TEXT_SIZES.secondary,
  },
  time: {
    fontSize: TEXT_SIZES.regular,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
