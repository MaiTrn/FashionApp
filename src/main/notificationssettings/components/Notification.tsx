import React from "react";
import { View, Text, Switch } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

interface OptionProps {
  title: string;
  description: string;
}

const Notification = ({ title, description }: OptionProps) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: SIZES.spacing.m,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>{title}</Text>
        <Text style={{ color: COLORS.text.small, ...FONTS.body2 }}>
          {description}
        </Text>
      </View>
      <Switch
        value={checked}
        onValueChange={() => setChecked(!checked)}
        trackColor={{ true: COLORS.primary, false: COLORS.gray }}
        thumbColor={COLORS.white}
        style={{ paddingVertical: SIZES.spacing.m }}
      />
    </View>
  );
};

export default Notification;
