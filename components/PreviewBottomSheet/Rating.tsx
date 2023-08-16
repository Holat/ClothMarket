import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Rating = () => {
  const { colors } = useTheme();
  const [count, setCount] = useState(1);
  return (
    <View style={styles.cont}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", gap: 2 }}>
          {new Array(5).fill("").map((_, i) => (
            <MaterialIcons
              key={i}
              name={i < 3 ? "star" : "star-border"}
              size={20}
              color={i < 3 ? "#facc15" : "#191919"}
            />
          ))}
        </View>
        <Text style={[styles.rateTxt, { color: colors.text }]}>
          3.0 (250k Reviews)
        </Text>
      </View>
      <View style={[styles.countCont, { backgroundColor: colors.primary }]}>
        <TouchableOpacity
          onPress={() => setCount((prevCount) => Math.max(1, prevCount - 1))}
          style={[styles.countBtn, { backgroundColor: colors.card }]}
        >
          <MaterialIcons name="remove" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.background,
          }}
        >
          {count}
        </Text>
        <TouchableOpacity
          onPress={() => setCount((prevCount) => Math.min(10, prevCount + 1))}
          style={[styles.countBtn, { backgroundColor: colors.card }]}
        >
          <MaterialIcons name="add" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rateTxt: {
    fontSize: 14,
    opacity: 0.5,
    marginTop: 4,
  },
  countCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 44,
    padding: 6,
  },
  countBtn: {
    width: 32,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
  },
});
