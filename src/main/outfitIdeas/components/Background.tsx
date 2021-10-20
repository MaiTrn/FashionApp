import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

import { BG, COLORS, SIZES } from "../../../../constants";

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
          height: SIZES.height / 3 + SIZES.borderRadius.xl * 2,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: -10,
            height: SIZES.borderRadius.xl * 2,
            width: SIZES.width,
            zIndex: 10,
          }}
        >
          <View
            style={{
              left: 0,
              height: SIZES.borderRadius.xl,
              backgroundColor: COLORS.white,
              width: SIZES.width - SIZES.borderRadius.xl,
            }}
          />
          <Svg
            height={SIZES.borderRadius.xl}
            width={SIZES.borderRadius.xl}
            style={{
              position: "absolute",
              right: 0,
              zIndex: 10,
            }}
            viewBox="0 0 1 1"
          >
            <Path
              d="M 0 1 A 1 1, 0, 0, 0, 1 0 L 0 0"
              // put your path here: M 278 83 C 294 73 394 101 395 -11 V 99 H 278 Z"
              fill={COLORS.white}
            />
          </Svg>
          <Svg
            height={SIZES.borderRadius.xl}
            width={SIZES.borderRadius.xl}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 10,
            }}
            viewBox="0 0 1 1"
          >
            <Path
              d="M 0 1 A 1 1, 0, 0, 1, 1 0 L 0 0"
              // put your path here: M 278 83 C 294 73 394 101 395 -11 V 99 H 278 Z"
              fill={COLORS.white}
            />
          </Svg>
        </View>
        <Image
          source={BG.source}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -2,
            height: SIZES.borderRadius.xl * 2,
            width: SIZES.width,
            zIndex: 10,
          }}
        >
          <Svg
            height={SIZES.borderRadius.xl}
            width={SIZES.borderRadius.xl}
            style={{
              position: "absolute",
              top: 0,
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
          <Svg
            height={SIZES.borderRadius.xl}
            width={SIZES.borderRadius.xl}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
            viewBox="0 0 1 1"
          >
            <Path
              d="M 0 1 A 1 1, 0, 0, 1, 1 0 L 1 1"
              // put your path here: M 278 83 C 294 73 394 101 395 -11 V 99 H 278 Z"
              fill={COLORS.secondary}
            />
          </Svg>
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              height: SIZES.borderRadius.xl,
              backgroundColor: COLORS.secondary,
              width: SIZES.width - SIZES.borderRadius.xl,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: SIZES.height / 3 - SIZES.borderRadius.xl,
          backgroundColor: COLORS.secondary,
          overflow: "hidden",
        }}
      />
    </View>
  );
};

export default Background;
