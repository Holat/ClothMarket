import { ScrollView, StyleSheet, FlatList } from "react-native";
import React, { useState, useRef, useCallback } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MasonryList from "reanimated-masonry-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import {
  FlatListItem,
  MasonryListItem,
  Header,
  Collections,
  CustomBackdrop,
  FilteredView,
} from "../components";
import { Categories, listData } from "../assets/Items";
import { MasonryListProp } from "../types/types";

const HomeScreen = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        <StatusBar style="dark" />
        {/* header */}
        <Header handlePresentModal={handlePresentModalPress} />
        {/* Collections */}
        <Collections />
        {/* flat list */}
        <FlatList
          data={Categories}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <FlatListItem
                item={item}
                index={index}
                isSelected={isSelected}
                setCategoryIndex={setCategoryIndex}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
            maxHeight: 50,
            flexGrow: 0,
          }}
        />
        {/* Masonry list */}
        <MasonryList
          data={listData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          containerStyle={{
            paddingHorizontal: 16,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }: MasonryListProp) => (
            <MasonryListItem key={item.id} item={item} i={i} />
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["80%"]}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
        // onChange={(index) => handleSheetChanges}
      >
        <FilteredView />
      </BottomSheetModal>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
});
