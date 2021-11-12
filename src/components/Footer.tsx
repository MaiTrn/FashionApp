import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../../constants";

const Footer = ({ onPress }: { onPress: () => void }) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: SIZES.padding2 * 2,
    }}
  >
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.padding,
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={"close"} size={35} />
    </TouchableOpacity>
  </View>
);

export default Footer;
