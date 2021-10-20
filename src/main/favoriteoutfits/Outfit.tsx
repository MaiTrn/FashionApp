import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { COLORS, SIZES } from "../../../constants";
import { IconCircle } from "../../components";

const width =
  (SIZES.width - SIZES.borderRadius.m * 2 - SIZES.borderRadius.s * 4) / 2;

interface OutfitProps {
  outfit: { id: number; color: string; aspectRatio: number; selected: boolean };
  editable: boolean;
}

const Outfit = ({ outfit, editable }: OutfitProps) => {
  const [selected, setSelected] = useState(outfit.selected);

  const onSelect = () => {
    setSelected((prev) => !prev);
    outfit.selected = !outfit.selected;
  };
  return (
    <View>
      {editable ? (
        <TouchableOpacity
          style={{ margin: SIZES.borderRadius.s }}
          onPress={onSelect}
        >
          <View
            style={{
              height: width * outfit.aspectRatio,
              width,
              backgroundColor: outfit.color,
              borderRadius: SIZES.borderRadius.m,
              alignItems: "flex-end",
              padding: SIZES.padding * 0.8,
            }}
          >
            {!selected && (
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: outfit.color,
                  borderColor: COLORS.white,
                  borderWidth: 1,
                }}
              />
            )}
            {selected && (
              <IconCircle
                name="check"
                size={24}
                color={COLORS.white}
                backgroundColor={COLORS.primary}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            margin: SIZES.borderRadius.s,
            height: width * outfit.aspectRatio,
            width,
            backgroundColor: outfit.color,
            borderRadius: SIZES.borderRadius.m,
          }}
        />
      )}
    </View>
  );
};

export default Outfit;
