import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { RectButton } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { AuthNavigationProps } from "../../components/Navigation";
import { Button } from "../../components";

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.welcomeText}>out</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.slide.lightGray,
          }}
        >
          <View style={styles.footerContent}>
            <Text style={[styles.subTitle, FONTS.h2]}>Let's get started</Text>
            <Text style={[styles.description, FONTS.body3]}>
              Log in to your account below or signup for an amazing experience
            </Text>
            <View style={{ justifyContent: "space-evenly", flex: 1 }}>
              <Button
                variant="primary"
                label="Have an account? Login"
                onPress={() => navigation.navigate("Login")}
              />
              <Button
                label="Join us, it's Free"
                onPress={() => navigation.navigate("Register")}
              />
              <RectButton
                style={{
                  width: 245,
                  height: 50,
                  borderRadius: SIZES.borderRadius.l,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.white,
                }}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={{ color: COLORS.text.primary, ...FONTS.label }}>
                  Forgot password?
                </Text>
              </RectButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: SIZES.height * 0.5,
    borderBottomRightRadius: SIZES.borderRadius.xl,
    backgroundColor: COLORS.slide.lightGray,
    alignItems: "center",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.borderRadius.xl,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: isIphoneX() ? 44 : 42,
  },
  subTitle: {
    color: COLORS.text.primary,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: COLORS.text.small,
    textAlign: "center",
    marginBottom: 40,
  },
  welcomeText: {
    fontFamily: "SFProText-Bold",
    color: COLORS.white,
    fontSize: 310,
    lineHeight: 240,
    opacity: 0.6,
    marginHorizontal: -44,
    paddingTop: 100,
  },
});
