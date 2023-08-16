import { Details } from "../../screens";
import { useLocalSearchParams, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View, Text } from "react-native";

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <Details />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
