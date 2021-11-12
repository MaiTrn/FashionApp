import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import Icon from "react-native-vector-icons/Fontisto";

import { COLORS, FONTS, SIZES } from "../../../../constants";
import { CardType } from "../../../components/Data";
import CardLayout from "./CardLayout";

interface cardModel {
  id: number;
  type: CardType;
  lastDigits: number;
  expiration: string;
}
interface cardProps {
  card: cardModel;
  selected: boolean;
  onSelect: () => void;
}

const visa =
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";

const mastercard =
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";

const CardComponent = ({ card, selected, onSelect }: cardProps) => {
  return (
    <View style={{ flex: 1 }}>
      <CardLayout
        onPress={onSelect}
        backgroundColor={selected ? COLORS.primary : COLORS.white}
      >
        {/* <View style={{ height: 25, justifyContent: "center" }}> */}
        <SvgUri
          width={card.type === CardType.VISA ? "50%" : "40%"}
          height="20%"
          uri={card.type === CardType.VISA ? visa : mastercard}
        />
        {/* </View> */}
        <Text
          style={{
            color: selected ? COLORS.white : COLORS.black,
            marginTop: SIZES.borderRadius.m,
            marginBottom: SIZES.borderRadius.s,
            ...FONTS.body3,
          }}
        >
          **** {card.lastDigits}
        </Text>
        <Text
          style={{
            color: selected ? COLORS.white : COLORS.black,
            opacity: 0.5,
            ...FONTS.body2,
          }}
        >
          Expiration
        </Text>
        <Text
          style={{
            color: selected ? COLORS.white : COLORS.black,
            ...FONTS.body1,
          }}
        >
          {card.expiration}
        </Text>
      </CardLayout>
      {selected && (
        <View
          style={{
            alignSelf: "center",
            backgroundColor: COLORS.primary,
            bottom: 0,
            left: 0,
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
        />
      )}
    </View>
  );
};

export default CardComponent;
