import { useDriverStanding } from "@/entities/standing";
import { DriverChampionshipEntryDTO } from "@/shared/api";
import { Card, TEXT_SIZES } from "@/shared/ui";
import { useTheme } from "@/shared/ui/theme/theme-provider";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

export const DriversStanding = () => {
  const { colors } = useTheme();
  const driversStanding = useDriverStanding();

  const leaders = driversStanding?.slice(0, 3);

  const renderItem: ListRenderItem<Partial<DriverChampionshipEntryDTO>> = ({ item }) => (
    <View style={styles.row}>
      <View style={[styles.positionCircle, { backgroundColor: colors.primary }]}>
        <Text style={styles.positionText}>{item.position}</Text>
      </View>
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
  number: {
    fontSize: TEXT_SIZES.regular,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
