import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

interface LineProps {
  label: String;
  value: number;
}

const Line = ({ label, value }: LineProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.spacing.s,
        paddingHorizontal: SIZES.spacing.m,
      }}
    >
      <View>
        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{label}</Text>
      </View>
      <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
        ${value.toFixed(2)}
      </Text>
    </View>
  );
};

export default Line;
