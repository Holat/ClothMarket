import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Card from "./Card";
import { collections } from "../assets/Items";

const Collections = () => {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={[styles.header]}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>New Collections</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 12, height: 200 }}>
        <Card
          item={"item1"}
          imageUrl={collections[0].item1}
          price={collections[0].price}
        />
        <View style={{ flex: 1, gap: 12 }}>
          <Card
            item={"item2"}
            imageUrl={collections[1].item2}
            price={collections[1].price}
          />
          <Card
            item={"item3"}
            imageUrl={collections[2].item3}
            price={collections[2].price}
          />
        </View>
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
});
