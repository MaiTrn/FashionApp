import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import SwipeableRow from "./components/SwipeableRow";

interface itemProps {
  color: string;
  size: string[];
  name: string;
  price: string;
  quantity: number;
  onDelete: () => void;
}

const Item = ({ color, size, name, price, quantity, onDelete }: itemProps) => {
  const height = 120 + SIZES.spacing.m * 2;

  return (
    <SwipeableRow height={height} {...{ onDelete }}>
      <View
        style={{
          paddingLeft: SIZES.spacing.l,
          padding: SIZES.spacing.m,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: color,
            height: 120,
            width: 120,
            borderRadius: SIZES.borderRadius.m,
          }}
        />
        <View
          style={{
            paddingHorizontal: SIZES.spacing.m,
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={{ ...FONTS.body5 }}>Size {size.join(", ")}</Text>
          <Text style={{ marginBottom: SIZES.spacing.s, ...FONTS.body3 }}>
            {name}
          </Text>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            ${price}
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: COLORS.secondary,
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
              x{quantity}
            </Text>
          </View>
        </View>
      </View>
    </SwipeableRow>
  );
};

export default Item;
