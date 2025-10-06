import { RaceDTO } from "@/shared/api/dto";
import { sendPushNotification } from "@/shared/lib/push-notification";
import dayjs from "dayjs";
import * as Notifications from "expo-notifications";

export async function getAllScheduledNotifications() {
  const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
  return scheduledNotifications;
}

export async function clearAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export async function scheduleRaceNotifications(races: RaceDTO[]) {
  await clearAllNotifications();

  for (const race of races) {
    const { schedule } = race;

    // Планируем уведомление за 1 час до спринт квалификации
    if (schedule?.sprintQualy?.date && schedule?.sprintQualy?.time) {
      const qualyDateTime = dayjs(
        `${schedule.sprintQualy.date} ${schedule.sprintQualy.time}`,
      );
      const notificationTime = qualyDateTime.subtract(1, "hour");

      if (notificationTime.isAfter(dayjs())) {
        await sendPushNotification({
          date: notificationTime,
          title: `🏎️ Sprint Qualifying: ${race.raceName}`,
          body: `Sprint Qualifying starts in 1 hour on the track ${race.circuit?.circuitName || "unknown track"}`,
        });
      }
    }

    // Планируем уведомление за 1 час до спринт гонки
    if (schedule?.sprintRace?.date && schedule?.sprintRace?.time) {
      const qualyDateTime = dayjs(
        `${schedule.sprintRace.date} ${schedule.sprintRace.time}`,
      );
      const notificationTime = qualyDateTime.subtract(1, "hour");

      if (notificationTime.isAfter(dayjs())) {
        await sendPushNotification({
          date: notificationTime,
          title: `🏎️ Sprint Race: ${race.raceName}`,
          body: `Sprint Race starts in 1 hour on the track ${race.circuit?.circuitName || "unknown track"}`,
        });
      }
    }

    // Планируем уведомление за 1 час до квалификации
    if (schedule?.qualy?.date && schedule?.qualy?.time) {
      const qualyDateTime = dayjs(`${schedule.qualy.date} ${schedule.qualy.time}`);
      const notificationTime = qualyDateTime.subtract(1, "hour");

      if (notificationTime.isAfter(dayjs())) {
        await sendPushNotification({
          date: notificationTime,
          title: `🏎️ Qualifying: ${race.raceName}`,
          body: `Qualifying starts in 1 hour on the track ${race.circuit?.circuitName || "unknown track"}`,
        });
      }
    }

    // Планируем уведомление за 1 час до гонки
    if (schedule?.race?.date && schedule?.race?.time) {
      const raceDateTime = dayjs(`${schedule.race.date} ${schedule.race.time}`);
      const notificationTime = raceDateTime.subtract(1, "hour");

      if (notificationTime.isAfter(dayjs())) {
        await sendPushNotification({
          date: notificationTime,
          title: `🏁 Race: ${race.raceName}`,
          body: `Race starts in 1 hour on the track ${race.circuit?.circuitName || "unknown track"}`,
        });
      }
    }
  }

  // Выводим все запланированные уведомления в консоль
  await getAllScheduledNotifications();
}
