import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components";
import { COLORS } from "../../../constants";
import { HomeNavigationProps } from "../../components/Navigation";

const Logout = ({ navigation }: HomeNavigationProps<"Logout">) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-outline", onPress: () => console.log("left") }}
        label="Logout"
        dark={false}
      />
      <Text>profile</Text>
    </View>
  );
};

export default Logout;
