import React, { ReactNode, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../../constants";
import { IconCircle } from "../../../components";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

interface swipeablerowProps {
  children: ReactNode;
  onDelete: () => void;
  height: number;
}

const finalDest = SIZES.width;

// -85 * aspectRatio
const snapPoints = [-85, 0, finalDest];

const SwipeableRow = ({
  height: defaultHeight,
  children,
  onDelete,
}: swipeablerowProps) => {
  const height = useSharedValue(defaultHeight);
  const translateX = useSharedValue(0);
  const deleteItem = useCallback(() => {
    onDelete();
  }, [onDelete]);

  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = translationX + ctx.x;
    },

    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: true,
        },
        (isFinished) => {
          if (dest === finalDest && isFinished) {
            height.value = withTiming(0, { duration: 250 }, (isFinished) => {
              if (isFinished) {
                runOnJS(deleteItem)();
              }
            });
          }
        }
      );
    },
  });

  const style = useAnimatedStyle(() => ({
    backgroundColor: COLORS.white,
    overflow: "hidden",
    height: height.value,
    transform: [{ translateX: translateX.value }],
  }));
  const deleteStyle = useAnimatedStyle(() => ({
    overflow: "hidden",
    opacity: translateX.value > 0 ? 1 : 0,
  }));
  const editStyle = useAnimatedStyle(() => ({
    overflow: "hidden",
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <View>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            paddingHorizontal: SIZES.spacing.s,
            backgroundColor: COLORS.danger,
            justifyContent: "center",
            alignItems: "flex-start",
          },
          deleteStyle,
        ]}
      >
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[COLORS.danger, COLORS.white]}
          start={[0, 0.5]}
          end={[0.6, 0.5]}
        />
        <Text style={{ color: COLORS.white }}>Delete</Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            alignItems: "flex-end",
            justifyContent: "center",
          },
          editStyle,
        ]}
      >
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[COLORS.slide.lightBlue, COLORS.white]}
          start={[1, 0.5]}
          end={[0.7, 0.5]}
        />
        <TouchableOpacity
          style={{ margin: SIZES.spacing.s }}
          onPress={() => true}
        >
          <IconCircle
            name="plus"
            size={24}
            color={COLORS.white}
            backgroundColor={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: SIZES.spacing.s }}>
          <IconCircle
            name="minus"
            size={24}
            color={COLORS.white}
            backgroundColor={COLORS.danger}
          />
        </TouchableOpacity>
      </Animated.View>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
