import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./drawer";
import EditProfile from "./editprofile";
import OutfitIdeas from "./outfitIdeas";
import FavoriteOutfits from "./favoriteoutfits";
import NotificationsSettings from "./notificationssettings";
import TransactionHistory from "./transactionhistory";
import Logout from "./logout";

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
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
