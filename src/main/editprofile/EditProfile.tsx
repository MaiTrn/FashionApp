import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";

import {
  HomeNavigationProps,
  ProfileRoutes,
} from "../../components/Navigation";
import MainScreen from "./MainScreen";
import ProfileSavedScreen from "./ProfileSavedScreen";

const Stack = createStackNavigator<ProfileRoutes>();

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ProfileSavedScreen" component={ProfileSavedScreen} />
    </Stack.Navigator>
  );
};

export default EditProfile;
