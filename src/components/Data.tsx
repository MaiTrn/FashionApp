import { CommonActions } from "@react-navigation/native";

import { COLORS } from "../../constants";
import { DrawerItemProps } from "../main/drawer/DrawerItem";
import { DataPoint } from "../main/transactionhistory/Graph";

export const slides = [
  {
    title: "Relaxed",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: COLORS.slide.lightBlue,
  },
  {
    title: "Playful",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: COLORS.slide.lightGreen,
  },
  {
    title: "Eccentric",
    subTitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: COLORS.slide.lightOrange,
  },
  {
    title: "Funky",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: COLORS.slide.lightPink,
  },
];

export interface menuProps {
  icon: string;
  name: string;
  color: string;
}

export const menu: DrawerItemProps[] = [
  {
    icon: "flash",
    name: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "#2CB9B0",
  },
  {
    icon: "heart",
    name: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "#FE4715",
  },
  {
    icon: "account",
    name: "Edit Profile",
    screen: "EditProfile",
    color: "#FFBB00",
  },
  {
    icon: "clock-time-four",
    name: "Transaction History",
    screen: "TransactionHistory",
    color: "#F77897",
  },
  {
    icon: "cog",
    name: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "#441FB5",
  },
  {
    icon: "undo",
    name: "Logout",
    color: "#0F0D31",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
  },
];

export const defaultOutfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#DEEFC4",
    aspectRatio: 160 / 145,
    selected: false,
  },
];
export const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

export const transactionData: DataPoint[] = [
  {
    id: 245669,
    date: new Date("2019-09-01").getTime(),
    value: 110.9,
  },
  {
    id: 245671,
    date: new Date("2019-11-11").getTime(),
    value: 139.42,
  },
  {
    id: 245672,
    date: new Date("2019-12-20").getTime(),
    value: 281.23,
  },
  {
    id: 245673,
    date: new Date("2020-03-17").getTime(),
    value: 186.54,
  },
];

export const cards = [
  { index: 3, source: require("../../assets/pictures/3.png") },
  { index: 2, source: require("../../assets/pictures/2.png") },
  { index: 1, source: require("../../assets/pictures/1.png") },
  { index: 0, source: require("../../assets/pictures/0.png") },
];

export const tabs = [
  { id: 1, name: "Configuration" },
  { id: 2, name: "Personal Info" },
];

export const outfitTypes = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
  { id: 3, name: "Both" },
];
export const sizes = [
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },
  { id: 4, name: "XL" },
  { id: 5, name: "XXL" },
];
export const colors = [
  { id: 1, name: COLORS.month[1] },
  { id: 2, name: COLORS.month[2] },
  { id: 3, name: COLORS.month[3] },
  { id: 4, name: COLORS.month[4] },
  { id: 5, name: COLORS.month[5] },
  { id: 6, name: COLORS.month[6] },
  { id: 7, name: COLORS.month[7] },
  { id: 8, name: COLORS.month[8] },
  { id: 9, name: COLORS.month[9] },
  { id: 10, name: COLORS.month[10] },
  { id: 11, name: COLORS.month[11] },
  { id: 12, name: COLORS.month[12] },
];
export const brands = [
  { id: 1, name: "Adidas" },
  { id: 2, name: "Nike" },
  { id: 3, name: "Converse" },
  { id: 4, name: "Tommy Hilfiger" },
  { id: 5, name: "Billionaire Boys Club" },
  { id: 6, name: "Jordan" },
  { id: 7, name: "Le Coq Sportif" },
  { id: 8, name: "See all" },
];

export const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

export const notifOptions = [
  {
    title: "Outfit Ideas",
    description: "Receive daily notifications",
  },
  {
    title: "Discounts & Sales",
    description: "Buy the stuffs you love for less",
  },
  {
    title: "Stock Notifications",
    description: "If the product you love comes back in stock",
  },
  {
    title: "New Stuff",
    description: "Hear it first, wear it first",
  },
];

export const cart = [
  {
    id: 1,
    color: COLORS.slide.lightYellow,
    size: ["M", "L"],
    name: "Short Sleeved Organic Top",
    price: 29.99,
    quantity: 2,
  },
  {
    id: 2,
    color: COLORS.slide.lightPink,
    size: ["S", "S"],
    name: "Black Denim Jeans",
    price: 59.98,
    quantity: 2,
  },
  {
    id: 3,
    color: COLORS.slide.lightGreen,
    size: ["S"],
    name: "Oversized Hoodie",
    price: 25.0,
    quantity: 1,
  },
  {
    id: 4,
    color: COLORS.slide.lightBlue,
    size: ["L", "M", "XL"],
    name: "Long Sleeved Top",
    price: 29.99,
    quantity: 3,
  },
  {
    id: 5,
    color: COLORS.slide.lightPink,
    size: ["S", "S"],
    name: "Black Denim Jeans",
    price: 59.98,
    quantity: 2,
  },
  {
    id: 6,
    color: COLORS.slide.lightGreen,
    size: ["S"],
    name: "Oversized Hoodie",
    price: 25.0,
    quantity: 1,
  },
  {
    id: 7,
    color: COLORS.slide.lightBlue,
    size: ["L", "M", "XL"],
    name: "Long Sleeved Top",
    price: 29.99,
    quantity: 3,
  },
];
export enum CardType {
  VISA,
  MASTERCARD,
}

export const paymentCards = [
  {
    id: 0,
    type: CardType.VISA,
    lastDigits: 5467,
    expiration: "05/24",
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    lastDigits: 2620,
    expiration: "05/24",
  },
];
