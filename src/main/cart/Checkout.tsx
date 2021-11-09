import React from "react";
import { ScrollView, View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { Slider } from "../../components";
import { paymentCards } from "../../components/Data";
import CardComponent from "./components/CardComponent";

interface checkoutProps {
  minHeight: number;
  totalPrice: number;
}

const Checkout = ({ minHeight, totalPrice }: checkoutProps) => {
  const [selectedCard, setSelectedCard] = React.useState(paymentCards[0].id);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: minHeight,
        backgroundColor: COLORS.secondary,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: SIZES.spacing.m,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: SIZES.spacing.s }}
        >
          {paymentCards.map((card) => (
            <CardComponent
              card={card}
              key={card.id}
              selected={card.id === selectedCard}
              onSelect={() => setSelectedCard(card.id)}
            />
          ))}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider
            onEnd={() => console.log(true)}
            text={`Swipe to pay $${totalPrice}`}
          />
        </View>
      </View>
    </View>
  );
};

export default Checkout;
