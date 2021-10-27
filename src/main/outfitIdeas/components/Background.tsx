import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

import { BG, COLORS, SIZES } from "../../../../constants";

const viewBox = { width: 392, height: 150 };

const Background = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View
        style={{
          height: SIZES.height / 3 - SIZES.borderRadius.xl,
          backgroundColor: COLORS.white,
          overflow: "hidden",
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          height: SIZES.height / 3,
          backgroundColor: COLORS.white,
        }}
      >
        {/* top */}
        <Svg
          width={SIZES.width}
          height={(150 * SIZES.width) / viewBox.width}
          viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Path
            d="M 0 0 H 392 A 75 75 0 0 1 317 75 H 75 A 75 75 0 0 0 0 150"
            fill={COLORS.white}
          />
        </Svg>

        <Image
          source={BG.source.full}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
        {/* bot */}
        <Svg
          width={SIZES.width}
          height={(150 * SIZES.width) / viewBox.width}
          viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
          style={{
            position: "absolute",
            bottom: -5,
            right: -1,
            zIndex: 10,
          }}
        >
          <Path
            d="M 392 0 A 75 75 0 0 1 317 75 H 75 A 75 75 0 0 0 0 150 H 392"
            fill={COLORS.secondary}
          />
        </Svg>
      </View>

      <View
        style={{
          height: SIZES.height / 3 - SIZES.borderRadius.xl,
          backgroundColor: COLORS.secondary,
          overflow: "hidden",
        }}
      ></View>
    </View>
  );
};

export default Background;
