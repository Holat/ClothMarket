import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { MasonryListProp } from "../types/types";

const MasonryListItem = ({ item, i }: MasonryListProp) => {
  const { colors } = useTheme();
  return (
    <View style={{ padding: 6 }}>
      <View
        style={[
          styles.itemCont,
          { aspectRatio: i % 4 === 0 || (i - 3) % 4 === 0 ? 1 : 2 / 3 },
        ]}
      >
        <Image
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
          <View style={{ flexDirection: "row", padding: 4, gap: 10 }}>
            <Text
              style={[
                styles.txt1,
                { color: colors.text, flex: 1, flexWrap: "wrap", fontSize: 16 },
              ]}
            >
              {item.title}
            </Text>

            <View
              style={[
                styles.itemHeader,
                { backgroundColor: colors.background },
              ]}
            >
              <MaterialIcons
                name="favorite-border"
                size={20}
                color={colors.text}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
          <BlurView intensity={25} tint="light" style={[styles.blurView]}>
            <Text style={[styles.txt2]} numberOfLines={1}>
              ${item.price}.00
            </Text>
            <TouchableOpacity style={[styles.btn2]}>
              <MaterialIcons
                name="add-shopping-cart"
                size={20}
                color={"#000"}
              />
            </TouchableOpacity>
          </BlurView>
        </View>
      </View>
    </View>
  );
};

export default MasonryListItem;

const styles = StyleSheet.create({
  itemCont: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 24,
  },
  txt1: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "700",
  },
  itemHeader: {
    borderRadius: 100,
    height: 32,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blurView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    borderRadius: 100,
    overflow: "hidden",
  },
  txt2: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 4,
  },
  btn2: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
