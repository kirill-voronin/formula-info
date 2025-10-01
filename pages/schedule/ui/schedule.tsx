import { RaceDTO } from "@/shared/api";
import { theme } from "@/shared/lib";
import { Loading } from "@/shared/ui";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useGetSchedule } from "../model/use-get-schedule";

const renderItem: ListRenderItem<Partial<RaceDTO>> = ({ item }) => (
  <View style={styles.card}>
    <View style={{ maxWidth: "75%" }}>
      <Text style={styles.title} numberOfLines={1}>
        {item.raceName}
      </Text>
      <Text style={styles.region}>
        {item.circuit?.city}, {item.circuit?.country}
      </Text>
    </View>
    <View style={styles.timeBlock}>
      <Text style={styles.date}>{item.schedule?.race?.date.replace(/-/g, ".")}</Text>
      <Text style={styles.time}>
        {new Date(
          `${item.schedule?.race?.date}T${item.schedule?.race?.time}`,
        ).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}
      </Text>
    </View>
  </View>
);

const Schedule = () => {
  const { schedule, isLoading, error } = useGetSchedule();

  if (isLoading) {
    return <Loading />;
  }

  if (!schedule) {
    return <Text>No schedule found</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList data={schedule} renderItem={renderItem} />
    </View>
  );
};

export default Schedule;

const ITEM_HEIGHT = 52;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: ITEM_HEIGHT,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#232323",
  },
  region: {
    fontSize: 12,
    color: "#717171",
    marginTop: 1,
  },
  timeBlock: {
    alignItems: "flex-end",
  },
  date: {
    fontSize: 13,
    color: "#333",
  },
  time: {
    fontSize: 13,
    color: theme.colors.primary,
    fontWeight: "600",
  },
});
