import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import Button from "./Button";
import FilteredItems from "./FilteredItems";
import PriceRangeSelector from "./PriceRangeSelector";

const MAX_PRICE = 500;

const FilteredView = () => {
  const [startPrice, setStartPrice] = useState(50);
  const [endPrice, setEndPrice] = useState(250);

  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingVertical: 24, gap: 24, flex: 1 }}>
          <View style={styles.headerCont}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: "700",
                color: colors.text,
              }}
            >
              Filters
            </Text>
            <TouchableOpacity>
              <Text style={{ color: colors.text }}>RESET</Text>
            </TouchableOpacity>
          </View>
          {/* range selector */}
          <PriceRangeSelector
            minPrice={0}
            maxPrice={MAX_PRICE}
            startPrice={startPrice}
            endPrice={endPrice}
            onStartPriceChange={setStartPrice}
            onEndPriceChange={setEndPrice}
          />
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
