import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { FlatLIstProp } from "../types/types";

const FlatListItem = ({
  index,
  item,
  isSelected,
  setCategoryIndex,
}: FlatLIstProp) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => setCategoryIndex(index)}
      style={{
        backgroundColor: isSelected ? colors.primary : colors.card,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 100,
        borderWidth: isSelected ? 0 : 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: isSelected ? colors.background : colors.text,
          fontWeight: "600",
          fontSize: 16,
          opacity: isSelected ? 1 : 0.5,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({});
