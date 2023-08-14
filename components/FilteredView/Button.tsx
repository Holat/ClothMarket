import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";

const Button = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ padding: 24, paddingBottom: 24 + insets.bottom }}>
      <View style={[styles.btn, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.txt, { color: theme.colors.background }]}>
          Apply filters
        </Text>
        <TouchableOpacity
          style={[styles.arrow, { backgroundColor: theme.colors.card }]}
        >
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: 64,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
  },
  arrow: {
    borderRadius: 50,
    position: "absolute",
    right: 10,
    width: 45,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
