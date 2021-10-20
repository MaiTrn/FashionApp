import React, { ReactNode } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { COLORS, SIZES, BG } from "../../constants";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
  // const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ backgroundColor: COLORS.white }}>
          <View
            style={{
              height: BG.resize * 0.6,
              overflow: "hidden",
              borderBottomLeftRadius: pattern === 0 ? SIZES.borderRadius.xl : 0,
              borderBottomRightRadius:
                pattern === 1 ? SIZES.borderRadius.xl : 0,
            }}
          >
            <Image
              source={BG.source}
              style={{
                width: SIZES.width,
                height: BG.resize,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Image
            source={BG.source}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: SIZES.width,
              height: BG.resize,
              top: -BG.resize * 0.6,
            }}
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: SIZES.spacing.xl,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.borderRadius.xl,
              borderTopLeftRadius:
                pattern === 1 || pattern === 2 ? SIZES.borderRadius.xl : 0,
              borderTopRightRadius:
                pattern === 0 || pattern === 2 ? SIZES.borderRadius.xl : 0,
            }}
          >
            {children}
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.secondary,
            // marginBottom: insets.bottom,
            paddingVertical: SIZES.padding * 1.6,
          }}
        >
          {footer}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:
      SIZES.height * 1.032 +
      (Platform.OS === "android" ? Constants.statusBarHeight : 0),
    backgroundColor: COLORS.secondary,
  },
});
