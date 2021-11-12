import React, { ReactNode } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { SIZES } from "../../../../constants";

interface CardLayoutProps {
  children: ReactNode;
  backgroundColor: string;
  onPress: () => void;
}

const CardLayout = ({
  children,
  backgroundColor,
  onPress,
}: CardLayoutProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          margin: SIZES.spacing.s,
          padding: SIZES.spacing.m,
          width: 120,
          height: 160,
          borderRadius: SIZES.borderRadius.m,
          backgroundColor,
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardLayout;
