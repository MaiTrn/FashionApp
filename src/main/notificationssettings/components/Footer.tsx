import React, { ReactNode } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import { BG, COLORS, SIZES } from "../../../../constants";

const viewBox = {
  width: 392,
  height: 150,
};
const d = "M 0 0 H 392 A 75 75 0 0 1 317 75 H 75 A 75 75 0 0 0 0 150";

const Footer = () => {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Svg
        width={SIZES.width}
        height={(150 * SIZES.width) / viewBox.width}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
        style={{ zIndex: 10, marginTop: -1 }}
      >
        <Path fill={COLORS.white} d={d} />
      </Svg>
      <Image
        source={BG.source.full}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: SIZES.width,
          height: (SIZES.width * 24) / 32 + 80,
        }}
      />
    </View>
  );
};

export default Footer;
