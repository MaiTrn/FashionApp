import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface IconCircleProps {
  name: string;
  size: number;
  color: string;
  backgroundColor: string;
}

const IconCircle = ({
  name,
  color,
  size,
  backgroundColor,
}: IconCircleProps) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        {...{ color }}
        size={size * 0.6}
        style={{ textAlign: "center" }}
      />
    </View>
  );
};

export default IconCircle;
