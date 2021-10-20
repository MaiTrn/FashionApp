import React, { Children, ReactNode } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash/lib/module/v1";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { IconCircle } from "../../components";
import { tabs } from "../../components/DummyData";

interface childrenProps {
  children: ReactNode;
}

const Tabs = ({ children }: childrenProps) => {
  const [index, setIndex] = React.useState(0);
  const transition = useTransition(index);
  const translateX = mix(
    transition,
    SIZES.width * 0.25 - 5,
    SIZES.width * 0.75 - 5
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {tabs.map((tab, i) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.button}
            onPress={() => setIndex(i)}
          >
            <Text
              style={{
                textAlign: "center",
                color: index === i ? COLORS.text.primary : COLORS.text.small,
                ...FONTS.h4,
              }}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={{
            position: "absolute",
            alignSelf: "center",
            backgroundColor: COLORS.primary,
            bottom: 0,
            left: 0,
            width: 8,
            height: 8,
            borderRadius: 4,
            transform: [{ translateX }],
          }}
        />
      </View>

      {/* <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        scrollEventThrottle={16}
        contentContainerStyle={{ width: SIZES.width * tabs.length }}
      > */}
      <Animated.View
        style={{
          width: SIZES.width * tabs.length,
          flexDirection: "row",
          transform: [{ translateX: multiply(-SIZES.width, transition) }],
        }}
      >
        {Children.map(children, (child, i) => (
          <View key={i} style={{ flex: 1, width: SIZES.width }}>
            {child}
          </View>
        ))}
      </Animated.View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          marginVertical: SIZES.spacing.s,
          width: 280,
          height: 50,
          borderRadius: SIZES.borderRadius.xl,
          backgroundColor: COLORS.button.primary,
          justifyContent: "flex-start",
          alignItems: "center",
          alignSelf: "center",
          ...styles.shadow,
        }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <IconCircle
            name="gesture-swipe"
            color={COLORS.button.primary}
            backgroundColor={COLORS.white}
            size={42}
          />
        </View>
        <Text style={{ color: COLORS.white, marginLeft: SIZES.spacing.l }}>
          Swipe to save changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: SIZES.spacing.m,
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
