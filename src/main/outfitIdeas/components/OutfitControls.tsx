import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../../constants";

const OutfitControls = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("back")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 35,
          width: 30,
        }}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color={COLORS.darkGray}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("new")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 35,
          width: 30,
        }}
      >
        <MaterialCommunityIcons
          name="open-in-new"
          size={26}
          color={COLORS.darkGray}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("next")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 35,
          width: 30,
        }}
      >
        <MaterialCommunityIcons
          name="arrow-right"
          size={25}
          color={COLORS.darkGray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OutfitControls;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    width: 200,
    height: 60,
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
