import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../";

interface CardProps extends PropsWithChildren {
  title?: string | React.ReactNode;
}

export default function NextRaceCard({ title, children }: CardProps) {
  const { colors } = useTheme();

  const renderTitle = () => {
    if (typeof title === "string") {
      return <Text style={[styles.title, { color: colors.text }]}>{title}</Text>;
    }
    return title;
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.onBackground }]}>
      {title && renderTitle()}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
});
