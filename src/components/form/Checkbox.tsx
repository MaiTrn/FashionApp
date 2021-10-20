import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, SIZES, FONTS } from "../../../constants";

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={() => onChange()}
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: value ? COLORS.primary : "transparent",
          borderColor: COLORS.primary,
          borderWidth: 1,
          width: 20,
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.borderRadius.s,
          marginRight: SIZES.borderRadius.s,
        }}
      >
        {value && (
          <MaterialCommunityIcons name="check" color={COLORS.white} size={16} />
        )}
      </View>
      <Text style={{ color: COLORS.text.primary, ...FONTS.label }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = { label: "" };

export default Checkbox;
