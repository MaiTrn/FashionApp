import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

import { COLORS, FONTS } from "../../../constants";
import { Button } from "../../components";

interface SubslideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Slide = ({ subTitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.subTitle, FONTS.h2]}>{subTitle}</Text>
      <Text style={[styles.description, FONTS.body3]}>{description}</Text>
      <Button
        variant={last ? "primary" : "default"}
        label={last ? "Let's get started" : "Next"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: isIphoneX() ? 44 : 42,
    marginBottom: -20, //added for centering the subslides
  },
  subTitle: {
    color: COLORS.text.primary,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: COLORS.text.small,
    textAlign: "center",
    marginBottom: 40,
  },
});
