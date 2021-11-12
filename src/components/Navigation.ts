import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

export interface AuthNavigationProps<RouteName extends keyof AuthRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}
export interface ProfileNavigationProps<RouteName extends keyof ProfileRoutes> {
  navigation: DrawerNavigationProp<ProfileRoutes, RouteName>;
  route: RouteProp<ProfileRoutes, RouteName>;
}
export interface CartNavigationProps<RouteName extends keyof CartRoutes> {
  navigation: DrawerNavigationProp<CartRoutes, RouteName>;
  route: RouteProp<CartRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
  AccountCreated: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
  EditProfile: undefined;
  FavoriteOutfits: undefined;
  TransactionHistory: undefined;
  NotificationsSettings: undefined;
  Cart: undefined;
  PurchaseConfirmed: undefined;
};

export type ProfileRoutes = {
  MainScreen: undefined;
  ProfileSavedScreen: undefined;
};

export type CartRoutes = {
  MainScreen: undefined;
  PurchaseConfirmedScreen: undefined;
};
