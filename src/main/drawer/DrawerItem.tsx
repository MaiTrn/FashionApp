import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { IconCircle } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

interface BaseDrawerItem {
  name: string;
  icon: string;
  color: string;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}
interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;
// navigation: DrawerNavigationHelpers
const DrawerItem = ({ name, icon, color, ...props }: DrawerItemProps) => {
  const navigation =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
  return (
    <TouchableOpacity
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
    >
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          alignItems: "center",
        }}
      >
        <IconCircle
          name={icon}
          color="white"
          backgroundColor={color}
          size={36}
        />
        <Text
          style={{
            paddingLeft: 10,
            color: COLORS.text.primary,
            ...FONTS.label,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;
