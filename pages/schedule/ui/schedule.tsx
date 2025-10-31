import { useNextRace } from "@/entities/race/model/store";
import { RaceDTO } from "@/shared/api";
import { Flag, Loading, TEXT_SIZES } from "@/shared/ui";
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
      <View style={styles.titleContainer}>
        <Flag code={item.circuit?.country || ""} />
        <View style={styles.titleTextContainer}>
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
            {item.circuit?.country}, {item.circuit?.city}
          </Text>
          <Text style={[styles.circuitName, { color: colors.textSecondary }]}>
            {item.circuit?.circuitName}
          </Text>
        </View>
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    maxWidth: "75%",
  },
  titleTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
  },
  title: {
    fontSize: TEXT_SIZES.regular,
    fontWeight: "700",
  },
  circuitName: {
    fontSize: TEXT_SIZES.secondary,
    marginTop: 1,
  },
  timeBlock: {
    alignItems: "flex-end",
  },
  date: {
    fontSize: TEXT_SIZES.secondary,
  },
  time: {
    fontSize: TEXT_SIZES.secondary,
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
