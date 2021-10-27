import React, { ReactNode } from "react";
import { View, ScrollView } from "react-native";
import { useTransition } from "react-native-redash/lib/module/v1";
import { COLORS, SIZES } from "../../../constants";

interface CartContianerProps {
  children: ReactNode;
}

const mainContentHeight = (650 * SIZES.width) / 375;
const snapHeight = (500 * SIZES.width) / 375;

const CartContainer = ({ children }: CartContianerProps) => {
  const [index, setIndex] = React.useState(0);
  const transition = useTransition(index);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToInterval={snapHeight}
        decelerationRate="normal"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: SIZES.width,
            height: mainContentHeight,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: SIZES.borderRadius.xl,
            borderBottomRightRadius: SIZES.borderRadius.xl,
          }}
        >
          {children}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 40,
              alignSelf: "center",
              justifyContent: "flex-end",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <View
              style={{
                width: 60,
                height: 5,
                backgroundColor: COLORS.gray,
                borderRadius: SIZES.borderRadius.xl,
                marginVertical: SIZES.spacing.m,
              }}
            />
          </View>
        </View>
      </ScrollView>
      {/* <Animated.View
          style={{
            flex: 1,
            width: SIZES.width * numberOfTabs,
            flexDirection: "row",
            transform: [{ translateX: multiply(-SIZES.width, transition) }],
          }}
        >
          {Children.map(children, (child, i) => (
            <View key={i} style={{ flex: 1, width: SIZES.width }}>
              {child}
            </View>
          ))}
        </Animated.View> */}
    </View>
  );
};

export default CartContainer;
