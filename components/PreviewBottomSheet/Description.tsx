import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Description = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 6,
          color: colors.text,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          color: colors.text,
          opacity: 0.75,
        }}
        numberOfLines={3}
      >
        Elevate your style with our sleek jacket – where fashion meets function.
        Perfect for any occasion, its modern design and premium comfort make it
        a must-have addition to your wardrobe.
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
