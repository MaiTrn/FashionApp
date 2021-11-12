import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./drawer";
import EditProfile from "./editprofile";
import OutfitIdeas from "./outfitIdeas";
import FavoriteOutfits from "./favoriteoutfits";
import NotificationsSettings from "./notificationssettings";
import TransactionHistory from "./transactionhistory";
import Cart from "./cart";
import ProfileSaved from "./confirmation/ProfileSaved";
import PurchaseConfirmed from "./confirmation/PurchaseConfirmed";

const Drawer = createDrawerNavigator<HomeRoutes>();
const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="OutfitIdeas"
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: DRAWER_WIDTH },
      }}
      drawerContent={({ navigation }) => <DrawerContent {...{ navigation }} />}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
      <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
      <Drawer.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
      />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="ProfileSaved" component={ProfileSaved} />
      <Drawer.Screen name="PurchaseConfirmed" component={PurchaseConfirmed} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
