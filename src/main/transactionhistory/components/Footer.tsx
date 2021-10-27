import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";

import { BG, COLORS, SIZES } from "../../../../constants";

interface FooterProps {
  footerHeight: number;
}

const Footer = ({ footerHeight }: FooterProps) => {
  const size = SIZES.borderRadius.xl;

  return (
    <>
      <Svg
        height={size}
        width={size}
        style={{
          position: "absolute",
          bottom: footerHeight,
          right: 0,
        }}
        viewBox="0 0 1 1"
      >
        <Defs>
          <ClipPath id="clip">
            <Path d="M 0 1 A 1 1, 0, 0, 0, 1 0 L 1 1" />
          </ClipPath>
        </Defs>
        <Rect
          clipPath="url(#clip)"
          x={0}
          y={0}
          width={1}
          height={1}
          fill="#111741"
        />
        <Circle
          cx={0.5}
          cy={0.5}
          r={0.45}
          clipPath="url(#clip)"
          x={0}
          y={0}
          fill={COLORS.pink}
        />
      </Svg>
      <View
        style={{
          height: footerHeight,
          borderTopLeftRadius: SIZES.borderRadius.xl,
          aspectRatio: BG.aspectRatio,
          overflow: "hidden",
          backgroundColor: COLORS.secondary,
        }}
      >
        <Image
          source={BG.source[4]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: BG.resize,
          }}
        />
      </View>
    </>
  );
};

export default Footer;
