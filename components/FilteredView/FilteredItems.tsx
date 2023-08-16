import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Chip from "./Chip";
import { Colors, Sports, Sleeves } from "../../assets/Items";
import { useTheme } from "@react-navigation/native";

const FilteredItems = ({ title }: { title: string }) => {
  const { colors } = useTheme();
  const Items = () => {
    switch (title) {
      case "sports":
        return Sports;
      case "colors":
        return Colors;
      case "sleeves":
        return Sleeves;
      default:
        return [];
    }
  };

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Text style={[styles.header, { color: colors.text }]}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {Items().map((item, i) => {
          return (
            <Chip
              key={`${i}${title}${item}`}
              label={`${item}`}
              isSelected={i === 0}
              left={title === "colors" && <ColoredDot item={item} />}
            />
          );
        })}
      </View>
    </View>
  );
};

const ColoredDot = ({ item }: { item: string }) => {
  return (
    <View
      style={{
        backgroundColor: `${item}`,
        width: 15,
        aspectRatio: 1,
        borderRadius: 50,
      }}
    ></View>
  );
};
export default FilteredItems;

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    textTransform: "capitalize",
  },
});
