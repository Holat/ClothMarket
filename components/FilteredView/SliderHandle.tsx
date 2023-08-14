import { View, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const SliderHandle = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.cont,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <View style={styles.dot}></View>
    </View>
  );
};

export default SliderHandle;

const styles = StyleSheet.create({
  cont: {
    position: "absolute",
    left: "10%",
    height: 24,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#2B3AF9",
    borderWidth: 1.5,
    transform: [
      {
        translateX: -12,
      },
      {
        translateY: -12,
      },
    ],
  },

  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#2B3AF9",
    borderRadius: 5,
  },
});
