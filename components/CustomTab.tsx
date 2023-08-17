import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { getIcon } from "../constants/FUNT";

import { useTheme } from "@react-navigation/native";

const CustomTab = (props: BottomTabBarProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={styles.cont}>
        {props.state.routes.map((route, i) => {
          const isActive = i === props.state.index;
          return (
            <Pressable
              key={route.key}
              onPress={() => props.navigation.navigate(route.name)}
              style={styles.btnCont}
            >
              <View
                style={[
                  styles.btn,
                  {
                    backgroundColor: isActive ? colors.primary : "transparent",
                    paddingRight: isActive ? 5 : 0,
                    paddingBottom: isActive ? 2 : 0,
                  },
                ]}
              >
                {getIcon(route.name, isActive ? colors.card : "#B4C3D9")}
              </View>
              {isActive && (
                <Text style={[styles.txt, { color: colors.text }]}>
                  {route.name === "index" ? "Home" : route.name}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
  },
  btnCont: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  txt: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
