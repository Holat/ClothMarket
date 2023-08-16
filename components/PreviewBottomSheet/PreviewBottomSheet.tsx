import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";

import Rating from "./Rating";
import Sizes from "./Sizes";
import Description from "./Description";
import Footer from "./Footer";

const PreviewBottomSheet = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <BottomSheet
      detached={true}
      snapPoints={[64, 500]}
      index={1}
      style={styles.bottomSheet}
      bottomInset={insets.bottom + 10}
      backgroundStyle={{
        borderRadius: 24,
        backgroundColor: colors.background,
      }}
    >
      <View style={{ padding: 16, gap: 16, flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
          PUMA Everyday Hussle
        </Text>
        <Rating />
        <Sizes />
        <Description />
        <View style={{ flex: 1 }} />
        <Footer />
      </View>
    </BottomSheet>
  );
};

export default PreviewBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    marginHorizontal: 20,
  },
});
