/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import { View, StyleSheet, TextInput as RNTextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, SIZES } from "../../../constants";

interface TextInputProps {
  placeholder: string;
  icon: string;
  errors?: string;
  touched?: boolean;
  value?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, errors, ...props }, ref) => {
    const color = !touched
      ? COLORS.darkGray
      : errors
      ? COLORS.danger
      : COLORS.primary;
    return (
      <View style={{ borderColor: color, ...styles.container }}>
        <MaterialCommunityIcons
          name={icon}
          size={16}
          {...{ color }}
          style={{ paddingHorizontal: SIZES.borderRadius.s }}
        />
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          style={styles.textInput}
          {...{ ref }}
          {...props}
        />
        {touched && (
          <MaterialCommunityIcons
            name={errors ? "close-circle" : "check-circle"}
            size={18}
            {...{ color }}
            style={{ paddingHorizontal: SIZES.borderRadius.s }}
          />
        )}
      </View>
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 320,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: SIZES.borderRadius.s,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 2,
    alignItems: "center",
    marginBottom: SIZES.borderRadius.m,
  },
  textInput: {
    width: 250,
    height: 50,
    color: COLORS.text.primary,
  },
});
