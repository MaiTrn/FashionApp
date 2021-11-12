import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../../constants";
import IconCircle from "./IconCircle";

interface sliderProps {
  onEnd: () => void;
  text: string;
}

const endPoint = 280 - 52; //total with of view - size of icon - margin

const Slider = ({ onEnd, text }: sliderProps) => {
  const translateX = useSharedValue(0);
  const onSave = useCallback(() => {
    translateX.value = 0;
    onEnd();
  }, [onEnd]);

  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      const value = translationX + ctx.x;
      if (value < 0) translateX.value = 0;
      else if (value > endPoint) translateX.value = 225;
      else translateX.value = value;
    },
    onEnd: () => {
      const dest = translateX.value > 220 ? endPoint : 0;
      translateX.value = withSpring(
        dest,
        { overshootClamping: true },
        (isFinished) => {
          if (dest === endPoint && isFinished) {
            runOnJS(onSave)();
          }
        }
      );
    },
  });

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={[styles.container, styles.shadow]}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[{ marginHorizontal: 5 }, sliderStyle]}>
          <IconCircle
            name="gesture-swipe-right"
            color={COLORS.button.primary}
            backgroundColor={COLORS.white}
            size={42}
          />
        </Animated.View>
      </PanGestureHandler>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.label }}>{text}</Text>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: SIZES.spacing.s,
    width: 280,
    height: 50,
    borderRadius: SIZES.borderRadius.xl,
    backgroundColor: COLORS.button.primary,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
  },
});
