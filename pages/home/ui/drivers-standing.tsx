import { useDriverStanding } from "@/entities/standing";
import { DriverChampionshipEntryDTO } from "@/shared/api";
import { Card } from "@/shared/ui";
import { useTheme } from "@/shared/ui/theme/theme-provider";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { podiumColors } from "../config/podiums-colors";

export const DriversStanding = () => {
  const { colors } = useTheme();
  const driversStanding = useDriverStanding();

  const leaders = driversStanding?.slice(0, 3);

  const renderItem: ListRenderItem<Partial<DriverChampionshipEntryDTO>> = ({ item }) => (
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
      <Text style={[styles.number, { color: colors.primary }]}>{item.points}</Text>
    </View>
  );

  return (
    <Card title="Drivers Standing">
      <FlatList data={leaders} renderItem={renderItem} />
    </Card>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
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
    color: "#555",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
});
