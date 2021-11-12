import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLORS, FONTS, SIZES } from "../../../constants";

import { Header } from "../../components";
import { cart } from "../../components/Data";
import { CartNavigationProps } from "../../components/Navigation";
import CartContainer from "./CartContainer";
import Checkout from "./Checkout";
import Item from "./Item";

const aspectRatio = SIZES.width / 375;

const Cart = ({ navigation }: CartNavigationProps<"MainScreen">) => {
  const [items, setItems] = React.useState(cart);

  function totalValue(total, cur) {
    return total + cur.price;
  }
  const totalPrice = items.reduce(totalValue, 0);

  const onEnd = () => {
    return navigation.navigate("PurchaseConfirmedScreen");
  };

  return (
    <CartContainer
      CheckoutComponent={Checkout}
      totalPrice={totalPrice}
      onEnd={onEnd}
    >
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: SIZES.width,
          borderBottomLeftRadius: SIZES.borderRadius.xl,
          paddingBottom: SIZES.spacing.s,
          zIndex: 20,
          height: 150 * aspectRatio,
        }}
      >
        <Header
          left={{
            icon: "arrow-left",
            onPress: () => navigation.goBack(),
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
            zIndex: 30,
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
        <GestureHandlerScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
          }}
          contentContainerStyle={{
            paddingTop: 140 * aspectRatio,
            paddingBottom: SIZES.spacing.m,
          }}
        >
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 50,
              paddingRight: 5,
              alignItems: "flex-end",
              justifyContent: "center",
              zIndex: 100,
              //workaround to render scroll
              backgroundColor: COLORS.lightGray,
              opacity: 0.1,
            }}
          />
          {items.map((item, index) => (
            <Item
              key={item.id}
              {...item}
              onDelete={() => {
                items.splice(index, 1);
                return setItems(items);
              }}
            />
          ))}
        </GestureHandlerScrollView>
      </View>
    </CartContainer>
  );
};

export default Cart;
