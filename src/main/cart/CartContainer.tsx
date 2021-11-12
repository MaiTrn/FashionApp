import React, { FC, ReactNode } from "react";
import { View, ScrollView } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import { COLORS, SIZES } from "../../../constants";

interface CartContainerProps {
  children: ReactNode;
  CheckoutComponent: FC<{
    minHeight: number;
    totalPrice: number;
    onEnd: () => void;
  }>;
  totalPrice: number;
  onEnd: () => void;
}

const height = (680 * SIZES.width) / 375;
const minHeight = (230 * SIZES.width) / 375;

const snapPoints = [-(height - minHeight), 0];

const CartContainer = ({
  children,
  CheckoutComponent,
  totalPrice,
  onEnd,
}: CartContainerProps) => {
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ y: number }>({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, ctx) => {
      translateY.value = clamp(
        translationY + ctx.y,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, { overshootClamping: true });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={{ flex: 1 }}>
      <CheckoutComponent
        minHeight={minHeight}
        totalPrice={totalPrice}
        onEnd={onEnd}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: COLORS.white,
              borderBottomLeftRadius: SIZES.borderRadius.xl,
              borderBottomRightRadius: SIZES.borderRadius.xl,
            },
            style,
          ]}
        >
          {children}
          <View
            style={{
              position: "absolute",
              top: SIZES.height / 2,
              right: 5,
              width: 5,
              height: 60,
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.borderRadius.xl,
              marginVertical: SIZES.spacing.m,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: SIZES.spacing.m,
              left: SIZES.width / 2 - 30,
              width: 60,
              height: 5,
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.borderRadius.xl,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 40,
              left: SIZES.borderRadius.xl,
              right: SIZES.borderRadius.xl,
              zIndex: 50,
              //workaround to render scroll
              backgroundColor: COLORS.gray,
              opacity: 0.1,
            }}
          ></View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default CartContainer;
