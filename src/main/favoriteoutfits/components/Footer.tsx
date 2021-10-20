import React from "react";
import { View } from "react-native";

import { COLORS, SIZES } from "../../../../constants";
import { Button } from "../../../components";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.borderRadius.l,
        borderTopLeftRadius: SIZES.borderRadius.xl,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="primary" {...{ label, onPress }} />
    </View>
  );
};

export default Footer;
