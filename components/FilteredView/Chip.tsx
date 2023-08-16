import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { ChipProp } from "../../types/types";

const Chip = ({ isSelected, label, left }: ChipProp) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.cont,
        {
          backgroundColor: isSelected
            ? theme.colors.text
            : theme.colors.background,
        },
      ]}
    >
      {!!left && <View style={{ marginRight: 4 }}>{left}</View>}
      <Text
        style={[
          styles.txt,
          {
            color: isSelected ? theme.colors.background : theme.colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});
