import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { Header } from "../../components";
import { COLORS, SIZES, FONTS } from "../../../constants";
import { fetchUserData } from "../../redux/actions";

import Tabs from "./Tabs";
import PersonalInfo from "./PersonalInfo";
import Configuration from "./Configuration";

interface ProfileProps {
  fetchUserData: () => void;
  currentUser: {
    name: undefined;
    email: undefined;
  };
  navigation: DrawerNavigationHelpers;
}

const EditProfile = (props: ProfileProps) => {
  useEffect(() => {
    props.fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEnd = () => {
    props.navigation.navigate("OutfitIdeas");
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flex: 0.2, backgroundColor: COLORS.white }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.secondary,
            borderBottomRightRadius: SIZES.borderRadius.xl,
          }}
        >
          <Header
            left={{
              icon: "menu",
              onPress: () => props.navigation.openDrawer(),
            }}
            label="Edit profile"
            dark
          />
        </View>
      </View>

      {/* Main */}
      <View
        style={{
          flex: 0.8,
          backgroundColor: COLORS.secondary,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: SIZES.borderRadius.xl,
          }}
        >
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: -50,
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: COLORS.slide.lightBlue,
              zIndex: 10,
            }}
          />
          <View style={{ padding: 30, top: 27 }}>
            <Text
              style={{
                color: COLORS.secondary,
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

          {/* Tabs */}
          <Tabs>
            <Configuration />
            <PersonalInfo />
          </Tabs>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (store: {
  currentUser: {
    name: undefined;
    email: undefined;
  };
}) => ({ currentUser: store.currentUser });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ fetchUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
