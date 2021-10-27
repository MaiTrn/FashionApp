import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

import { COLORS, FONTS, SIZES } from "../../constants";

import IconCircle from "./IconCircle";

interface HeaderProps {
  left: { icon: string; onPress: () => void };
  right?: { icon: string; onPress: () => void };
  label: string;
  dark: boolean;
  contentColor?: string;
}

const StatusBarHeight = Platform.select({
  ios: isIphoneX() ? 44 : 25,
  android: StatusBar.currentHeight,
  default: 20,
});

const Header = ({ left, right, label, dark, contentColor }: HeaderProps) => {
  const color =
    contentColor === undefined
      ? dark
        ? COLORS.white
        : COLORS.text.primary
      : contentColor;
  const backgroundColor = dark ? COLORS.secondary : undefined;
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: StatusBarHeight,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={left.onPress}>
        <IconCircle
          name={left.icon}
          size={40}
          {...{ color, backgroundColor }}
        />
      </TouchableOpacity>
      <Text style={{ color, ...FONTS.body5 }}>{label.toUpperCase()}</Text>
      {right ? (
        <TouchableOpacity onPress={right.onPress}>
          <IconCircle
            name={right.icon}
            size={40}
            {...{ color, backgroundColor }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
