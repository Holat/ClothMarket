import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const intensity = useSharedValue(0);
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP
    )})`,
  }));
  // styles
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style]
  );

  const blurViewProps = useAnimatedProps(() => {
    if (Platform.OS === "android") {
      return {
        intensity: 0,
      };
    }
    return {
      intensity: interpolate(
        animatedIndex.value,
        [-1, 0],
        [0, 20],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
  );
};

export default CustomBackdrop;

/**
 *     const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP)
 */
