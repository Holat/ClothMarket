import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

import { SIZES } from "../../assets/Items";

const Sizes = () => {
  const { colors } = useTheme();
  const [size, setSize] = useState(SIZES[0]);
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colors.text,
            flex: 1,
            textTransform: "uppercase",
          }}
        >
          Modal is 6'1'', Size M
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: colors.text,
            opacity: 0.5,
          }}
        >
          Size guide
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {SIZES.map((s, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setSize(s)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 44,
              backgroundColor: s === size ? colors.primary : colors.card,
              alignItems: "center",
              justifyContent: "center",

              marginTop: 6,
            }}
          >
            <Text
              style={{
                color: s === size ? "#fff" : colors.text,
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              {s}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Sizes;

const styles = StyleSheet.create({});
