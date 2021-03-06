import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { AuthNavigationProps } from "../../components/Navigation";
import { Container, Button } from "../../components";
import Footer from "../../components/Footer";

const AccountCreated = ({
  navigation,
}: AuthNavigationProps<"AccountCreated">) => {
  return (
    <Container pattern={3} footer={<Footer onPress={() => navigation.pop()} />}>
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
        Your account was successfully created
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
        Close this window and login again
      </Text>
      <View
        style={{
          alignItems: "center",
          marginTop: SIZES.borderRadius.m,
        }}
      >
        <Button
          label="Log into your account"
          variant="primary"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </Container>
  );
};

export default AccountCreated;
