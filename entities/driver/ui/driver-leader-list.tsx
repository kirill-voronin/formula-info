import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { Driver } from "../model/driver";
import { podiumColors } from "../model/podiums-colors";

interface DriverLeaderListProps {
  drivers: Driver[];
}

const renderItem: ListRenderItem<Driver> = ({ item }) => (
  <View style={styles.row}>
    <Text
      style={[
        styles.position,
        { color: podiumColors[item.position as keyof typeof podiumColors] },
      ]}>
      {item.position}.
    </Text>
    <Text style={styles.name}>
      {item.name?.split("")[0]}. {item.surname}
    </Text>
    <Text style={styles.team}>{item.team}</Text>
    <Text style={styles.number}>#{item.number}</Text>
  </View>
);

const DriversStanding = ({ drivers }: DriverLeaderListProps) => {
  return <FlatList data={drivers} renderItem={renderItem} />;
};

export default DriversStanding;

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
    color: "#d32f2f",
    marginLeft: 8,
  },
});
