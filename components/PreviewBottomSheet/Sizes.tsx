import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

import { SIZES } from "../../assets/Items";
import { ScrollView } from "react-native-gesture-handler";

const Sizes = () => {
  const { colors } = useTheme();
  const [size, setSize] = useState(SIZES[0]);
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.header, { color: colors.text }]}>
          Modal is 6'1'', Size M
        </Text>
        <Text style={[styles.header2, { color: colors.text }]}>Size guide</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        {SIZES.map((s, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setSize(s)}
            style={[
              styles.btn,
              { backgroundColor: s === size ? colors.primary : colors.card },
            ]}
          >
            <Text
              style={[styles.txt, { color: s === size ? "#fff" : colors.text }]}
            >
              {s}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sizes;

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
    textTransform: "uppercase",
  },
  header2: {
    fontWeight: "600",
    opacity: 0.5,
  },
  btn: {
    width: 44,
    height: 44,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  txt: {
    fontWeight: "600",
    fontSize: 16,
  },
});
