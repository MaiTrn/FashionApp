import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../../../../constants";

export interface RadioBox {
  id: number;
  name: string;
}

export interface RadioBoxProps {
  pattern: string;
  options: RadioBox[];
}

const RenderRadioBox = ({ options, pattern }: RadioBoxProps) => {
  const [selectedIDs, setSelectedIDs] = useState([]);

  return (
    <GestureHandlerScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      nestedScrollEnabled={true}
    >
      {options.map((option) => {
        const index = selectedIDs.indexOf(option.id);
        const isSelected = index !== -1;
        return (
          <TouchableOpacity
            key={option.id}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: SIZES.borderRadius.s,
              marginVertical: SIZES.borderRadius.m,
              width: 52,
              height: 52,
            }}
            onPress={() => {
              if (isSelected) {
                selectedIDs.splice(index, 1);
              } else {
                selectedIDs.push(option.id);
              }
              setSelectedIDs([...selectedIDs]);
            }}
          >
            {isSelected && (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 26,
                  borderColor: COLORS.button.default,
                  borderWidth: 2,
                }}
              />
            )}
            {pattern === "sizes" ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: isSelected
                    ? COLORS.button.primary
                    : COLORS.button.default,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? COLORS.white : COLORS.secondary,
                    ...FONTS.label,
                  }}
                >
                  {option.name}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: option.name,
                }}
              >
                {isSelected && (
                  <MaterialCommunityIcons
                    name="check"
                    color={COLORS.white}
                    size={20}
                    style={{ textAlign: "center" }}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </GestureHandlerScrollView>
  );
};

export default RenderRadioBox;
