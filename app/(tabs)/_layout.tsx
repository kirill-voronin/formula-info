import { useTheme } from "@/shared/ui";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.secondaryGrey,
          borderTopWidth: 1,
        },
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontWeight: "bold", color: colors.text },
        sceneStyle: { backgroundColor: colors.background },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
