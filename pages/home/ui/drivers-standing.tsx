import { podiumColors } from "@/entities/driver";
import { DriverChampionshipEntryDTO } from "@/shared/api";
import { theme } from "@/shared/lib";
import { Card, Loading } from "@/shared/ui";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useGetDriversStanding } from "../model/use-get-drivers-standing";

const renderItem: ListRenderItem<Partial<DriverChampionshipEntryDTO>> = ({ item }) => (
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
    <Text style={styles.number}>{item.points}</Text>
  </View>
);

export const DriversStanding = () => {
  const { driversStanding, isLoading, error } = useGetDriversStanding();

  const leaders = driversStanding.slice(0, 3);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

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
