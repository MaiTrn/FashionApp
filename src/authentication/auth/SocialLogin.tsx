/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, FONTS, SIZES } from "../../../constants";

const googleIcon = require("../../../assets/pictures/google.png");
const facebookIcon = require("../../../assets/pictures/facebook.png");

interface SocialProps {
  title: string;
  action: string;
  onPress: () => void;
}

const SocialLogin = ({ title, action, onPress }: SocialProps) => {
  return (
    <View>
      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={facebookIcon}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={googleIcon}
            resizeMode="contain"
            style={{ width: 21, height: 21 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingBottom: 2,
            ...styles.button,
          }}
        >
          <MaterialCommunityIcons name={"apple"} size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{ alignItems: "center", marginTop: SIZES.borderRadius.m * 1.2 }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.label,
            }}
          >
            {`${title}  `}
          </Text>
          <TouchableOpacity {...{ onPress }}>
            <Text style={{ color: COLORS.primary, ...FONTS.label }}>
              {action}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.padding,
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.padding,
  },
});
