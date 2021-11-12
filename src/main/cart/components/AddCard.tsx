import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import CardLayout from "./CardLayout";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface AddCardProps {}

const AddCard = () => {
  return (
    <CardLayout
      onPress={() => console.log("hi")}
      backgroundColor="rgba(255, 255, 255, 0.05)"
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon name="plus" color={COLORS.white} size={32} />
      </View>
    </CardLayout>
  );
};

export default AddCard;
