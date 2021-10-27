import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components";
import { COLORS, SIZES } from "../../../constants";
import { HomeNavigationProps } from "../../components/Navigation";
import { notifOptions } from "../../components/Data";

import Notification from "./components/Notification";
import Footer from "./components/Footer";

const NotificationsSettings = ({
  navigation,
}: HomeNavigationProps<"NotificationsSettings">) => {
  return (
    <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{
          icon: "square-edit-outline",
          onPress: () => console.log("left"),
        }}
        label="Notifications Settings"
      />
      <View style={{ padding: SIZES.spacing.m, paddingBottom: 0 }}>
        {notifOptions.map((option) => (
          <Notification
            key={option.title}
            title={option.title}
            description={option.description}
          />
        ))}
      </View>

      <Footer />
    </View>
  );
};

export default NotificationsSettings;
