import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { outfitTypes, sizes, colors, brands } from "../../components/DummyData";

import RenderCheckbox from "./components/RenderCheckbox";
import RenderRadioBox from "./components/RenderRadioBox";

const Configuration = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: SIZES.spacing.m, paddingBottom: 100 }}
    >
      <Text style={{ color: COLORS.text.small, ...FONTS.body1 }}>
        What type of outfit do you usually wear?
      </Text>
      <RenderCheckbox options={outfitTypes} style={styles.button} />
      <Text style={{ color: COLORS.text.small, ...FONTS.body1 }}>
        What type of your clothing size?
      </Text>
      <RenderRadioBox options={sizes} pattern="sizes" />
      <Text style={{ color: COLORS.text.small, ...FONTS.body1 }}>
        Your preferred clothing colors
      </Text>
      <RenderRadioBox options={colors} pattern="colors" />
      <Text style={{ color: COLORS.text.small, ...FONTS.body1 }}>
        Your preferred brands
      </Text>
      <RenderCheckbox options={brands} style={styles.button} />
    </ScrollView>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  button: {
    width: "auto",
    height: "auto",
    paddingHorizontal: SIZES.spacing.l,
    paddingVertical: SIZES.spacing.s,
  },
});
