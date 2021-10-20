import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { BG, SIZES } from "../../../../constants";

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const source = require("../../../../assets/pictures/4.png");

  return (
    <View
      style={{
        borderTopLeftRadius: SIZES.borderRadius.xl,
        aspectRatio: BG.aspectRatio,
        overflow: "hidden",
      }}
    >
      <Image
        source={source}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: (SIZES.width * 522) / 1060,
        }}
      />
    </View>
    // <View
    //   style={{
    //     borderTopLeftRadius: SIZES.borderRadius.xl,
    //     overflow: "hidden",
    //     aspectRatio: BG.aspectRatio,
    //   }}
    // >
    //   <Image
    //     source={BG.source}
    //     style={{
    //       ...StyleSheet.absoluteFillObject,
    //       width: undefined,
    //       height: undefined,
    //     }}
    //   />
    // </View>
  );
};

export default Footer;
