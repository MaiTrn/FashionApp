import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import Svg, { Path } from "react-native-svg";

import { Header } from "../../components";
import { COLORS, FONTS, SIZES, BG } from "../../../constants";
import { fetchUserData } from "../../redux/actions";
import { menu } from "../../components/Data";

import DrawerItem from "./DrawerItem";

export const DRAWER_WIDTH = SIZES.width * 0.8;

const viewBox = {
  width: 314,
  height: 120,
};

interface DrawerProps {
  fetchUserData: () => void;
  navigation: DrawerNavigationHelpers;
  currentUser: {
    name: undefined;
    email: undefined;
  };
}

const Drawer = (props: DrawerProps) => {
  useEffect(() => {
    props.fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isDrawerOpen = useDrawerStatus() === "open";
  // another way of using navigation: const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={isDrawerOpen ? "light" : "dark"} />
      {/* Header */}
      <View style={{ flex: 0.22, backgroundColor: COLORS.white }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.secondary,
            borderBottomRightRadius: SIZES.borderRadius.xl,
          }}
        >
          <Header
            left={{
              icon: "close",
              onPress: () => props.navigation.closeDrawer(),
            }}
            right={{
              icon: "shopping-outline",
              onPress: () => props.navigation.navigate("Cart"),
            }}
            label="my profile"
            dark
          />
        </View>
      </View>

      {/* Main Content */}
      <View style={{ flex: 0.78 }}>
        <View style={{ flex: 1, backgroundColor: COLORS.secondary }} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: SIZES.borderRadius.xl,
            padding: SIZES.spacing.xl,
            paddingBottom: SIZES.spacing.l,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: -50,
              backgroundColor: COLORS.slide.lightBlue,
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              padding: SIZES.spacing.xl,
            }}
          >
            <Text
              style={{
                color: COLORS.text.primary,
                textAlign: "center",
                ...FONTS.h1,
              }}
            >
              {props.currentUser?.name}
            </Text>
            <Text
              style={{
                color: COLORS.text.small,
                textAlign: "center",
                ...FONTS.body3,
              }}
            >
              {props.currentUser?.email}
            </Text>
          </View>
          {menu.map((item) => (
            <DrawerItem key={item.name} {...item} />
          ))}
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          backgroundColor: COLORS.secondary,
          width: DRAWER_WIDTH,
          height: BG.resize * 0.8,
          overflow: "hidden",
        }}
      >
        <Svg
          width={DRAWER_WIDTH}
          height={(120 * DRAWER_WIDTH) / viewBox.width}
          style={{
            position: "absolute",
            right: 0,
            zIndex: 10,
          }}
          viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
        >
          <Path
            d="M 0 0 H 314 A 60 60 0 0 1 254 60 H 60 A 60 60 0 0 0 0 120"
            fill={COLORS.white}
          />
        </Svg>

        <Image
          source={BG.source[3]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: DRAWER_WIDTH,
            height: undefined,
          }}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (store: {
  currentUser: {
    name: undefined;
    email: undefined;
  };
}) => ({
  currentUser: store.currentUser,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ fetchUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
