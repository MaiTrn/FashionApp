import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components";
import { COLORS, SIZES } from "../../../constants";
import { HomeNavigationProps } from "../../components/Navigation";
import { notifOptions } from "../../components/DummyData";

import Notification from "./components/Notification";
import Footer from "./components/Footer";

const NotificationsSettings = ({
  navigation,
}: HomeNavigationProps<"NotificationsSettings">) => {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{
          icon: "square-edit-outline",
          onPress: () => console.log("left"),
        }}
        label="Notifications Settings"
        dark={false}
      />
      <View style={{ padding: SIZES.spacing.m }}>
        {notifOptions.map((option) => (
          <Notification
            key={option.title}
            title={option.title}
            description={option.description}
          />
        ))}
      </View>
    </View>
  );
};

export default NotificationsSettings;
