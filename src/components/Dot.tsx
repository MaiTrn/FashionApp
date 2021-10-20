import React from "react";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { COLORS, SIZES } from "../../constants";

interface DotProps {
  currentIndex: Animated.SharedValue<number>;
  index: number;
}

const Dot = ({ currentIndex, index }: DotProps) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );
    return {
      borderRadius: SIZES.radius,
      margin: 4,
      opacity,
      width: 8,
      height: 8,
      backgroundColor: COLORS.button.primary,
      transform: [{ scale }],
    };
  });

  return <Animated.View key={`dot-${index}`} style={style} />;
};

export default Dot;
