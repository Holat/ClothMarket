import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import SliderHandle from "./SliderHandle";
import { PriceRangeSelectorProp } from "../../types/types";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const PriceRangeSelector = ({
  maxPrice,
  startPrice,
  endPrice,
  onEndPriceChange,
  onStartPriceChange,
}: PriceRangeSelectorProp) => {
  const { colors } = useTheme();
  const leftHandlePosition = useSharedValue(0);
  const rightHandlePosition = useSharedValue(maxPrice);
  const [barWidth, setBarWidth] = useState(0);

  const leftHandleGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      prevPos: number;
    }
  >({
    onStart(event, context) {
      context.prevPos = leftHandlePosition.value;
    },
    onActive(event, context) {
      leftHandlePosition.value = Math.min(
        rightHandlePosition.value,
        Math.max(0, context.prevPos + event.translationX)
      );

      runOnJS(onStartPriceChange)(
        Math.round((maxPrice / barWidth) * leftHandlePosition.value)
      );
    },
  });

  const rightHandleGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      prevPos: number;
    }
  >({
    onStart(event, context) {
      context.prevPos = rightHandlePosition.value;
    },
    onActive(event, context) {
      rightHandlePosition.value = Math.min(
        barWidth,
        Math.max(leftHandlePosition.value, context.prevPos + event.translationX)
      );

      runOnJS(onEndPriceChange)(
        Math.round((maxPrice / barWidth) * rightHandlePosition.value)
      );
    },
  });

  const leftHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: leftHandlePosition.value,
      },
    ],
  }));

  const rightHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: rightHandlePosition.value,
      },
    ],
  }));

  const barHighlightStyle = useAnimatedStyle(() => ({
    left: leftHandlePosition.value,
    right: barWidth - rightHandlePosition.value,
  }));

  const bars = useMemo(
    () => (
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {new Array(Math.round(maxPrice / 50)).fill("").map((_, i) => {
          const randomValue = Math.random();
          return (
            <View
              key={i}
              style={{
                flex: 1,
                height: Math.round(Math.random() * 40) + 8,
                backgroundColor: "#3b82f6",
                opacity: Math.max(0.2, Math.min(0.5, randomValue)),
              }}
            ></View>
          );
        })}
      </View>
    ),
    []
  );

  useEffect(() => {
    if (barWidth === 0) return;

    leftHandlePosition.value = (startPrice * barWidth) / maxPrice;
    rightHandlePosition.value = (endPrice * barWidth) / maxPrice;
  }, [barWidth]);
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontWeight: "600", color: colors.text }}>
          Price Range
        </Text>
      </View>
      {bars}
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: colors.border,
          position: "relative",
          marginBottom: 30,
        }}
        onLayout={(event) => setBarWidth(event.nativeEvent.layout.width)}
      >
        <Animated.View
          style={[
            barHighlightStyle,
            {
              position: "absolute",
              backgroundColor: "#3b82f6",
              height: "100%",
            },
          ]}
        ></Animated.View>
        <PanGestureHandler onGestureEvent={leftHandleGesture}>
          <Animated.View style={[{ position: "absolute" }, leftHandleStyle]}>
            <View
              style={[styles.bar, { right: 20, backgroundColor: colors.card }]}
            />
            <SliderHandle label={`$${startPrice}`} />
          </Animated.View>
        </PanGestureHandler>
        <PanGestureHandler onGestureEvent={rightHandleGesture}>
          <Animated.View style={[{ position: "absolute" }, rightHandleStyle]}>
            <View
              style={[styles.bar, { backgroundColor: colors.card, left: 2 }]}
            />
            <SliderHandle label={`$${endPrice}`} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default PriceRangeSelector;

const styles = StyleSheet.create({
  bar: {
    width: 1000,
    position: "absolute",
    height: 50,
    bottom: 24,
  },
});
