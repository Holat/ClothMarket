import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Cart = () => {
  const router = useRouter();
  return (
    <View>
      {/* <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/Details/[id]",
            params: { id: "2wefwe2" },
          })
        }
        style={[styles.img, styles.bell, { borderColor: "#000" }]}
      >
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity> */}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,

    gap: 8,
  },
  img: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 52,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  bell: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  searchCont: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
  },
  input: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderRadius: 52,
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 12,
    flexDirection: "row",
  },
});
