import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.text, opacity: 0.75, marginBottom: 4 }}>
          Total
        </Text>
        <Text style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}>
          ${(2500).toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity>
        <View style={[styles.btn, { backgroundColor: colors.primary }]}>
          <Text style={[styles.txt, { color: colors.background }]}>
            Add to cart
          </Text>
          <TouchableOpacity
            style={[styles.arrow, { backgroundColor: colors.card }]}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  btn: {
    height: 64,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexDirection: "row",
    padding: 12,
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 16,
  },
  arrow: {
    borderRadius: 40,
    width: 40,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
