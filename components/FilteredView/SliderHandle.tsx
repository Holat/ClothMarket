import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const SliderHandle = ({ label }: { label: string }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.cont,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={styles.dot}></View>
      <View style={[styles.labelCont]}>
        <View style={{ backgroundColor: colors.card }}>
          <Text style={{ color: colors.text }} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SliderHandle;

const styles = StyleSheet.create({
  cont: {
    left: "10%",
    height: 24,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#3b82f6",
    borderWidth: 1.5,
    transform: [
      {
        translateX: -12,
      },
      {
        translateY: -12,
      },
    ],
    position: "relative",
  },

  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#3b82f6",
    borderRadius: 5,
  },
  labelCont: {
    position: "absolute",
    top: 24,
    width: 200,
    alignItems: "center",
  },
});
