import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../../constants";
import { CardType } from "../../../components/Data";

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

const CardComponent = ({ card, selected, onSelect }: cardProps) => {
  return (
    <View
      style={{
        margin: SIZES.spacing.s,
        width: 120,
        height: 160,
        backgroundColor:
          card.type === CardType.VISA ? COLORS.primary : COLORS.white,
      }}
    >
      <Text>{card.type === CardType.VISA ? "Visa" : "Mastercard"}</Text>
    </View>
  );
};

export default CardComponent;
