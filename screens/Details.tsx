import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { PreviewBottomSheet } from "../components/PreviewBottomSheet";

const Details = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        }}
        style={{ flex: 1 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, right: 0, left: 0 }}
      >
        <StatusBar style="dark" />
        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.img, styles.bell, { borderColor: "#fff" }]}
          >
            <AntDesign name="arrowleft" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={[styles.img, styles.bell, { borderColor: "#fff" }]}
            >
              <MaterialIcons name="favorite" size={20} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back()}
              style={[styles.img, styles.bell, { borderColor: "#fff" }]}
            >
              <MaterialIcons
                name="add-shopping-cart"
                size={20}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <PreviewBottomSheet />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  img: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 52,
  },
  bell: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
