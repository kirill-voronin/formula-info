import { useNextRace } from "@/entities/race/model/store";
import { RaceDTO } from "@/shared/api";
import { Loading } from "@/shared/ui";
import { useTheme } from "@/shared/ui/theme/theme-provider";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { useGetSchedule } from "../api/use-get-schedule";

const Schedule = () => {
  const ref = useRef<FlatList>(null);
  const { colors } = useTheme();
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
    return (
      <View style={styles.loading}>
        <Loading />
      </View>
    );
  }

  if (!schedule) {
    return <Text>No schedule found</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem: ListRenderItem<Partial<RaceDTO>> = ({ item }) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderBottomColor: colors.backgroundSecondary,
        },
        nextRace?.raceId === item.raceId && {
          backgroundColor: colors.highlight,
        },
      ]}>
      <View style={{ maxWidth: "75%" }}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {item.raceName}
        </Text>
        <Text style={[styles.region, { color: colors.textSecondary }]}>
          {item.circuit?.city}, {item.circuit?.country}
        </Text>
      </View>
      <View style={styles.timeBlock}>
        <Text style={[styles.date, { color: colors.textSecondary }]}>
          {dayjs(`${item.schedule?.race?.date}T${item.schedule?.race?.time}`).format(
            "D MMMM",
          )}
        </Text>
        <Text style={[styles.time, { color: colors.text }]}>
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  region: {
    fontSize: 12,
    marginTop: 1,
  },
  timeBlock: {
    alignItems: "flex-end",
  },
  date: {
    fontSize: 13,
  },
  time: {
    fontSize: 13,
    fontWeight: "600",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    left: "-5%",
    top: "-5%",
  },
});
