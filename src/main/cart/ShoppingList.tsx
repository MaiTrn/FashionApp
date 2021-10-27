import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { Header } from "../../components";
import { cart } from "../../components/Data";
import { HomeRoutes } from "../../components/Navigation";
import Item from "./Item";

interface ShoppingListProps {
  navigation: DrawerNavigationProp<HomeRoutes, "Cart">;
}
const aspectRatio = SIZES.width / 375;

const ShoppingList = ({ navigation }: ShoppingListProps) => {
  const [items, setItems] = React.useState(cart);
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: SIZES.width,
          borderBottomLeftRadius: SIZES.borderRadius.xl,
          paddingBottom: SIZES.spacing.s,
          zIndex: 10,
          height: 150 * aspectRatio,
        }}
      >
        <Header
          left={{
            icon: "arrow-left",
            onPress: () => navigation.goBack(),
          }}
          right={{
            icon: "shopping-outline",
            onPress: () => true,
          }}
          label="shopping cart"
          contentColor={COLORS.white}
        />
        <Text
          style={{
            textAlign: "center",
            paddingVertical: SIZES.spacing.m,
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          3 items added
        </Text>
        <Svg
          height={SIZES.borderRadius.xl}
          width={SIZES.borderRadius.xl}
          style={{
            position: "absolute",
            bottom: -75,
            right: 0,
            zIndex: 20,
          }}
          viewBox="0 0 1 1"
        >
          <Path d="M 0 0 A 1 1, 0, 0, 1, 1 1 L 1 0" fill={COLORS.primary} />
        </Svg>
      </View>
      <View
        style={{
          borderBottomLeftRadius: SIZES.borderRadius.xl,
          borderBottomRightRadius: SIZES.borderRadius.xl,
          overflow: "hidden",
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
          }}
          contentContainerStyle={{
            paddingTop: 150 * aspectRatio,
            paddingBottom: SIZES.spacing.m,
          }}
        >
          {items.map((item, index) => (
            <Item
              key={item.id}
              {...item}
              onDelete={() => {
                items.splice(index, 1);
                setItems(items.concat());
              }}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default ShoppingList;
