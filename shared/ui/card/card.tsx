import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardProps extends PropsWithChildren {
  title?: string;
}

export default function NextRaceCard({ title, children }: CardProps) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
});
