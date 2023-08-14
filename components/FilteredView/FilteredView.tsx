import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import SliderHandle from "./SliderHandle";
import Button from "./Button";
import FilteredItems from "./FilteredItems";

const MAX_PRICE = 500;

const FilteredView = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);

  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingVertical: 24, gap: 24, flex: 1 }}>
          <View style={styles.headerCont}>
            <Text style={{ flex: 1, fontSize: 20, fontWeight: "600" }}>
              Filters
            </Text>
            <TouchableOpacity>
              <Text>RESET</Text>
            </TouchableOpacity>
          </View>
          {/* range selector */}
          <View style={{ paddingHorizontal: 24 }}>
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontWeight: "600" }}>Price Range</Text>
            </View>
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: theme.colors.border,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  left: `${(minPrice / MAX_PRICE) * 100}%`,
                  width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
                  backgroundColor: "#2B3AF9",
                  height: "100%",
                }}
              ></View>
              <View style={{ position: "absolute", left: "10%" }}>
                <SliderHandle />
              </View>
              <View style={{ position: "absolute", left: "50%" }}>
                <SliderHandle />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text style={{ color: theme.colors.text, opacity: 0.5 }}>$0</Text>
              <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
                ${MAX_PRICE}
              </Text>
            </View>
          </View>
          <FilteredItems title={"sports"} />
          <FilteredItems title={"colors"} />
          <FilteredItems title={"sleeves"} />
        </View>
      </ScrollView>
      <Button />
    </View>
  );
};

export default FilteredView;

const styles = StyleSheet.create({
  headerCont: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
