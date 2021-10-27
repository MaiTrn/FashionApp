import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  primary: "#2CB9B0",
  secondary: "#0C0D34",
  darkGray: "#8A8D90",
  lightGray: "#FAFAFA",
  gray: "#F4F0EF",
  danger: "#FF0058",

  month: {
    1: "#251DB1",
    2: "#2CB9B0",
    3: "#FE5E33",
    4: "#3EE0EA",
    5: "#442CB9",
    6: "#FFC641",
    7: "#EA3E3E",
    8: "#7C9DB6",
    9: "#FF87A2",
    10: "#876224",
    11: "#F41BFB",
    12: "#46EA3E",
  },

  //onboarding screen
  slide: {
    lightBlue: "#BFEAF5",
    lightGreen: "#BEECC4",
    lightOrange: "#FFE4D9",
    lightPink: "#FFDDDD",
    lightGray: "#F2F2F2",
    lightYellow: "#FFF7C0",
  },
  button: { primary: "#2CB9B0", default: "rgba(12, 13, 52, 0.05)" },
  text: { primary: "rgba(12, 13, 52, 0.7)", small: "rgba(12,13,52,0.5)" },
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  //border Radii
  borderRadius: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  //spacing
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  padding: 10,
  padding2: 12,
  SLIDE_HEIGHT: height * 0.62, //0.61

  // font sizes
  largeTitle: 80,
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 16,
  body2: 14,
  body3: 16,
  body4: 14,
  body5: 12,
  label: 15,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "SFProText-Bold",
    fontSize: SIZES.largeTitle,
    lineHeight: 80,
  },
  //title 1
  h1: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  //title 2
  h2: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  //??
  h3: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.h3,
    lineHeight: 24,
  },
  //no use
  h4: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  //body
  body1: {
    fontFamily: "SFProText-Regular",
    fontSize: SIZES.body1,
    lineHeight: 24,
  },
  //underlay text
  body2: {
    fontFamily: "SFProText-Regular",
    fontSize: SIZES.body2,
    lineHeight: 24,
  },
  //title 3
  body3: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.body3,
    lineHeight: 24,
  },
  //no use
  body4: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.body4,
    lineHeight: 24,
  },
  //header
  body5: {
    fontFamily: "SFProText-Semibold",
    fontSize: SIZES.body5,
    lineHeight: 24,
  },
  //button
  label: { fontSize: SIZES.label, fontFamily: "SFProText-Medium" },
};

export const BG = {
  source: {
    0: require("../assets/pictures/bg0.png"),
    1: require("../assets/pictures/bg1.png"),
    2: require("../assets/pictures/bg2.png"),
    3: require("../assets/pictures/bg3.png"),
    4: require("../assets/pictures/bg4.png"),
    full: require("../assets/pictures/bg.png"),
  },
  resize: (SIZES.width * 12) / 24,
  aspectRatio: 4,
};
const appTheme = { COLORS, SIZES, FONTS, BG };

export default appTheme;
