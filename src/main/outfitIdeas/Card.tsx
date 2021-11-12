import React from "react";
import { View, StyleSheet, ImageRequireSource } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { mix, mixColor, snapPoint } from "react-native-redash";

import { SIZES } from "../../../constants";

const width = SIZES.width * 0.75;
const height = width * (425 / 294);
const snapPoints = [-SIZES.width, 0, SIZES.width];

interface CardProps {
  index: number;
  aIndex: Animated.SharedValue<number>;
  step: number;
  onSwipe: () => void;
  source: ImageRequireSource;
}
interface gestureHandlerProps {
  x: number;
  y: number;
}

const Card = ({ index, aIndex, step, source, onSwipe }: CardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const position = useDerivedValue(() => index * step - aIndex.value);
  const translateYOffset = mix(position.value, 0, -50);

  const onGestureEvent = useAnimatedGestureHandler<gestureHandlerProps>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value + translateYOffset;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, {
        velocity: velocityY,
      });
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest === 0 ? false : true,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && runOnJS(onSwipe)()
      );
    },
  });

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1, 0.9],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));
  const cardStyle = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.8);

    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
      backgroundColor: mixColor(position.value, "#C9E9E7", "#74BCB8"),
    };
  });

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              height,
              width,
              borderRadius: SIZES.borderRadius.l,
              overflow: "hidden",
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            source={source}
            resizeMode="contain"
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                height: undefined,
                width: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card;
