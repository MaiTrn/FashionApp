import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { COLORS, FONTS, SIZES } from "../../constants";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
  style?: RectButtonProps["style"];
}

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? COLORS.button.primary : COLORS.button.default;
  const color = variant === "primary" ? COLORS.white : COLORS.text.primary;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={{ color, ...FONTS.label }}>{label}</Text>
    </RectButton>
  );
};
Button.defaultProps = {
  variant: "default",
  label: "",
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 245,
    height: 50,
    borderRadius: SIZES.borderRadius.l,
    justifyContent: "center",
    alignItems: "center",
  },
});
