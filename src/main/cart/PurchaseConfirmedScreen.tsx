import { CommonActions } from "@react-navigation/routers";
import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { Container, Button } from "../../components";
import Footer from "../../components/Footer";
import { CartNavigationProps } from "../../components/Navigation";

const PurchaseConfirmedScreen = ({
  navigation,
}: CartNavigationProps<"PurchaseConfirmedScreen">) => {
  return (
    <Container
      pattern={3}
      footer={<Footer onPress={() => navigation.navigate("MainScreen")} />}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: SIZES.borderRadius.l,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            opacity: 0.2,
            width: 80,
            height: 80,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <MaterialCommunityIcons
          style={{ position: "absolute" }}
          name="check-bold"
          size={32}
          color={COLORS.primary}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          color: COLORS.text.primary,
          ...FONTS.h1,
        }}
      >
        Purchase confirmed
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginVertical: SIZES.borderRadius.l,
          color: COLORS.text.small,
          paddingBottom: 10,
          ...FONTS.body3,
        }}
      >
        Close this window and continue shopping!
      </Text>
      <View
        style={{
          alignItems: "center",
          marginTop: SIZES.borderRadius.m,
        }}
      >
        <Button
          label="Go back to home screen"
          variant="primary"
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({ index: 0, routes: [{ name: "Home" }] })
            )
          }
        />
      </View>
    </Container>
  );
};

export default PurchaseConfirmedScreen;
