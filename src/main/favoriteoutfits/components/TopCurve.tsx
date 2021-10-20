import React from "react";
import Svg, { Path } from "react-native-svg";

import { COLORS, SIZES } from "../../../../constants";
interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const size = SIZES.borderRadius.xl;

  return (
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
      <Path
        d="M 0 1 A 1 1, 0, 0, 0, 1 0 L 1 1"
        // put your path here: M 278 83 C 294 73 394 101 395 -11 V 99 H 278 Z"
        fill={COLORS.secondary}
      />
    </Svg>
  );
};

export default TopCurve;
