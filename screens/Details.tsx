import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Details = () => {
  const router = useRouter();
  return (
    <>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        }}
        // resizeMode="cover"
        style={{ flex: 1, height: 200, width: 200 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, right: 0, left: 0 }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.img, styles.bell, { borderColor: "#fff" }]}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Details;

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
});
