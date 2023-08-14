import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";

interface HeaderProp {
  handlePresentModal: () => void;
}

const AVA_URL =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60";

const Header = ({ handlePresentModal }: HeaderProp) => {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <>
      {/* Header Section */}
      <View style={styles.subContainer}>
        <Image
          source={{ uri: AVA_URL }}
          style={styles.img}
          resizeMode="cover"
        />
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.headerTxt, { color: colors.text }]}
            numberOfLines={1}
          >
            Hi Julie 👋
          </Text>
          <Text
            style={{ color: colors.text, opacity: 0.75, fontSize: 12 }}
            numberOfLines={1}
          >
            Discover fashion that fits your style
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.img, styles.bell, { borderColor: colors.border }]}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchCont}>
        <TouchableOpacity
          style={[styles.input, { borderColor: colors.border }]}
        >
          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ opacity: 0.5 }}
          />
          <Text
            style={{
              flex: 1,
              opacity: 0.5,
              fontSize: 16,
              color: colors.text,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePresentModal}
          style={[
            styles.img,
            styles.bell,
            { borderColor: colors.border, backgroundColor: colors.text },
          ]}
        >
          <MaterialCommunityIcons
            name="tune-variant"
            size={24}
            color={colors.background}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;

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
