import React from "react";
import { ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS, SIZES, FONTS } from "../../../constants";
import { Header } from "../../components";

import { HomeNavigationProps } from "../../components/Navigation";
import CartContainer from "./CartContainer";
import Item from "./Item";
import ShoppingList from "./ShoppingList";

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  return (
    <CartContainer>
      <ShoppingList navigation={navigation} />
    </CartContainer>
  );
};

export default Cart;
