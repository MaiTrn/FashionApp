import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import { SIZES, COLORS } from "../../../constants";
import { Dot } from "../../components";
import { slides } from "../../components/DummyData";
import { AuthNavigationProps } from "../../components/Navigation";

import Slide from "./Slide";
import Subslide from "./Subslide";

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * SIZES.width),
      slides.map((slide) => slide.color)
    )
  );
  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const currentIndex = useDerivedValue(() => x.value / SIZES.width);
  const footerTranslation = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  return (
    <View style={styles.container}>
      {/* header */}
      <Animated.View style={[styles.slider, slider]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      {/* footer */}
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                width: SIZES.width * slides.length,
              },
              footerTranslation,
            ]}
          >
            {slides.map(({ subTitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{ subTitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      // remove getNode()
                      scroll.current?.scrollTo({
                        x: SIZES.width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  slider: {
    height: SIZES.SLIDE_HEIGHT,
    borderBottomRightRadius: SIZES.borderRadius.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.borderRadius.xl,
  },
  pagination: {
    height: 75,
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
