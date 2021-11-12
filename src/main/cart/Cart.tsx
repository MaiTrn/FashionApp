import React from "react";
import { HomeNavigationProps } from "../../components/Navigation";

import { createStackNavigator } from "@react-navigation/stack";
import PurchaseConfirmedScreen from "./PurchaseConfirmedScreen";
import MainScreen from "./MainScreen";

const Stack = createStackNavigator();

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="PurchaseConfirmedScreen"
        component={PurchaseConfirmedScreen}
      />
    </Stack.Navigator>
  );
};

export default Cart;
