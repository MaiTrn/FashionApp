import React, { useState } from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { SIZES } from "../../../../constants";
import { Button } from "../../../components";

export interface Checkbox {
  id: number;
  name: string;
}

export interface CheckboxProps {
  options: Checkbox[];
  style: RectButtonProps["style"];
}

const RenderCheckbox = ({ style, options }: CheckboxProps) => {
  const [selectedID, setSelectedID] = useState(null);

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 20,
        width: SIZES.width - SIZES.borderRadius.l,
      }}
    >
      {options.map((option) => (
        <Button
          key={option.id}
          variant={selectedID === option.id ? "primary" : "default"}
          label={option.name}
          style={[
            style,
            {
              margin: SIZES.borderRadius.s,
            },
          ]}
          onPress={() => setSelectedID(option.id)}
        />
      ))}
    </View>
  );
};

export default RenderCheckbox;
