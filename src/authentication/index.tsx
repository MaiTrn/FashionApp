import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "../components/Navigation";

import Onboarding from "./onboarding";
import Welcome from "./welcome";
import {
  Login,
  Register,
  ForgotPassword,
  PasswordChanged,
  AccountCreated,
} from "./auth";

const Stack = createStackNavigator<AuthRoutes>();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen name="AccountCreated" component={AccountCreated} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
