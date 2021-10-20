import React from "react";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";

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
      <Defs>
        <ClipPath id="clip">
          <Path
            d="M 0 1 A 1 1, 0, 0, 0, 1 0 L 1 1"
            // put your path here: M 278 83 C 294 73 394 101 395 -11 V 99 H 278 Z"
          />
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
  );
};

export default TopCurve;
