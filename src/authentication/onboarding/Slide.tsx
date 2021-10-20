import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SIZES.SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? SIZES.width / 2 - 60 : -SIZES.width / 2 + 60 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[{ transform }, styles.titleContainer]}>
        <Text
          style={{
            color: COLORS.white,
            textAlign: "center",
            ...FONTS.largeTitle,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
