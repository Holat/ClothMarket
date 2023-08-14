import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CardProp } from "../types/types";
import { useRouter } from "expo-router";

const Card = ({ imageUrl, onPress, price, item }: CardProp) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/details/${item}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.Cont]}>
      <Image
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
        style={styles.img}
      />
      <View style={styles.priceTag}>
        <Text style={styles.txt}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  Cont: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 24,
    position: "relative",
  },
  img: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  priceTag: {
    position: "absolute",
    left: 16,
    top: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 50,
  },
  txt: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
});
