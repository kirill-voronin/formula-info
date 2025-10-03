import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../theme/theme-provider";

export default function Loading() {
  const { colors } = useTheme();
  return <Text style={[styles.text, { color: colors.text }]}>Loading...</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
