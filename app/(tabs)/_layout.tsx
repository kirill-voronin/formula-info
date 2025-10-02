import { useTheme } from "@/shared/ui";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const { colors } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { fontWeight: "bold", color: colors.onBackground },
          sceneStyle: { backgroundColor: colors.secondaryContainer },
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.outline,
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { fontWeight: "bold", color: colors.onBackground },
          sceneStyle: { backgroundColor: colors.secondaryContainer },
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.outline,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
