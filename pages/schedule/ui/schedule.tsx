import { useNextRace } from "@/entities/race/model/store";
import { RaceDTO } from "@/shared/api";
import { theme } from "@/shared/lib";
import { Loading } from "@/shared/ui";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useGetSchedule } from "../model/use-get-schedule";

const Schedule = () => {
  const ref = useRef<FlatList>(null);
  const { schedule, isLoading, error } = useGetSchedule();
  const nextRace = useNextRace();

  useEffect(() => {
    if (!ref.current) return;
    const timeout = setTimeout(() => {
      ref.current?.scrollToEnd();
    }, 0);

    return () => clearTimeout(timeout);
  }, [schedule]);

  if (isLoading) {
    return <Loading />;
  }

  if (!schedule) {
    return <Text>No schedule found</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem: ListRenderItem<Partial<RaceDTO>> = ({ item }) => (
    <View style={[styles.card, nextRace?.raceId === item.raceId && styles.activeCard]}>
      <View style={{ maxWidth: "75%" }}>
        <Text style={styles.title} numberOfLines={1}>
          {item.raceName}
        </Text>
        <Text style={styles.region}>
          {item.circuit?.city}, {item.circuit?.country}
        </Text>
      </View>
      <View style={styles.timeBlock}>
        <Text style={styles.date}>
          {dayjs(`${item.schedule?.race?.date}T${item.schedule?.race?.time}`).format(
            "DD.MMMM",
          )}
        </Text>
        <Text style={styles.time}>
          {dayjs(`${item.schedule?.race?.date}T${item.schedule?.race?.time}`).format(
            "HH:mm",
          )}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList ref={ref} data={schedule} renderItem={renderItem} initialScrollIndex={0} />
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
  activeCard: {
    backgroundColor: theme.colors.primaryLight,
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
