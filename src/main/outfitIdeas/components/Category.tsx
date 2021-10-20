import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
  };
}

const Category = ({ category: { title, color } }: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  const [opacity, setOpacity] = useState(0.5);

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected((prev) => !prev);
        setOpacity(!selected ? 1 : 0.5);
      }}
    >
      <View
        style={{
          alignItems: "center",
          margin: SIZES.borderRadius.m,
          opacity,
        }}
      >
        <View
          style={{
            height: 68,
            width: 68,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
          }}
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: 34,
                borderColor: color,
                borderWidth: 1,
              }}
            />
          )}

          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: color,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.borderRadius.s,
            color: COLORS.text.primary,
            ...FONTS.body5,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
