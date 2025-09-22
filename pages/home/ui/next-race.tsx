import { Loading } from "@/shared/ui";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGetNextRace from "../model/useGetNextRace";

dayjs.extend(duration);

function formatDateTime(date: string | null, time: string | null) {
  if (!date || !time) return "—";
  const dt = dayjs(`${date}T${time}`);
  return dt.format("DD MMM HH:mm");
}

function formatCountdown(ms: number) {
  if (ms <= 0) return "Race started!";
  const duration = dayjs.duration(ms);
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function NextRaceCard() {
  const { race, schedule, circuit, isLoading } = useGetNextRace();

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    if (schedule?.race?.date && schedule?.race?.time) {
      const raceDateTime = dayjs(`${schedule.race.date}T${schedule.race.time}`);
      const now = dayjs();
      setTimeLeft(raceDateTime.diff(now));
    }
  }, [schedule?.race?.date, schedule?.race?.time]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.raceName}>{race?.raceName}</Text>
      <Text style={styles.location}>
        {circuit?.city}, {circuit?.country}
      </Text>

      {schedule?.sprintQualy && schedule?.sprintQualy.date && (
        <View style={styles.row}>
          <Text style={styles.label}>Sprint Qualifying:</Text>
          <Text style={styles.value}>
            {formatDateTime(schedule.sprintQualy.date, schedule.sprintQualy.time)}
          </Text>
        </View>
      )}

      {schedule?.sprintRace && schedule?.sprintRace.date && (
        <View style={styles.row}>
          <Text style={styles.label}>Sprint Race:</Text>
          <Text style={styles.value}>
            {formatDateTime(schedule.sprintRace.date, schedule.sprintRace.time)}
          </Text>
        </View>
      )}

      {schedule?.qualy && (
        <View style={styles.row}>
          <Text style={styles.label}>Qualifying:</Text>
          <Text style={styles.value}>
            {formatDateTime(schedule.qualy.date, schedule.qualy.time)}
          </Text>
        </View>
      )}

      {schedule?.race && (
        <View style={styles.row}>
          <Text style={styles.label}>Race:</Text>
          <Text style={styles.value}>
            {formatDateTime(schedule.race.date, schedule.race.time)}
          </Text>
        </View>
      )}

      {timeLeft && (
        <View style={[styles.row, styles.countdownRow]}>
          <Text style={styles.countdownLabel}>Time to race:</Text>
          <Text style={styles.countdownValue}>{formatCountdown(timeLeft)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  raceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  location: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  label: {
    color: "#888",
    fontWeight: "600",
  },
  value: {
    color: "#111",
  },
  countdownRow: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  countdownLabel: {
    fontWeight: "700",
    color: "#333",
  },
  countdownValue: {
    fontWeight: "700",
    color: "#d32f2f",
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
