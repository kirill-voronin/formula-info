import { useNextRace } from "@/entities/race";
import { Card, useTheme } from "@/shared/ui";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
  const race = useNextRace();
  const schedule = race?.schedule;
  const circuit = race?.circuit;

  const { colors } = useTheme();
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

  return (
    <Card title={race?.raceName}>
      <Text style={[styles.location, { color: colors.textSecondary }]}>
        {circuit?.city}, {circuit?.country}
      </Text>

      {schedule?.sprintQualy && schedule?.sprintQualy.date && (
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            Sprint Qualifying:
          </Text>
          <Text style={{ color: colors.text }}>
            {formatDateTime(schedule.sprintQualy.date, schedule.sprintQualy.time)}
          </Text>
        </View>
      )}

      {schedule?.sprintRace && schedule?.sprintRace.date && (
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            Sprint Race:
          </Text>
          <Text style={{ color: colors.text }}>
            {formatDateTime(schedule.sprintRace.date, schedule.sprintRace.time)}
          </Text>
        </View>
      )}

      {schedule?.qualy && (
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Qualifying:</Text>
          <Text style={{ color: colors.text }}>
            {formatDateTime(schedule.qualy.date, schedule.qualy.time)}
          </Text>
        </View>
      )}

      {schedule?.race && (
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>Race:</Text>
          <Text style={{ color: colors.text }}>
            {formatDateTime(schedule.race.date, schedule.race.time)}
          </Text>
        </View>
      )}

      {timeLeft && (
        <View
          style={[styles.row, styles.countdownRow, { borderTopColor: colors.outline }]}>
          <Text style={[styles.countdownLabel, { color: colors.primary }]}>
            Time to race:
          </Text>
          <Text style={[styles.countdownValue, { color: colors.primary }]}>
            {formatCountdown(timeLeft)}
          </Text>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  raceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  location: {
    fontSize: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  label: {
    fontWeight: "600",
  },
  countdownRow: {
    marginTop: 12,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  countdownLabel: {
    fontWeight: "700",
  },
  countdownValue: {
    fontWeight: "700",
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
