import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { Slider } from "../../components";
import { paymentCards } from "../../components/Data";
import AddCard from "./components/AddCard";
import CardComponent from "./components/CardComponent";
import Line from "./components/Line";

interface checkoutProps {
  minHeight: number;
  totalPrice: number;
  onEnd: () => void;
}

const Checkout = ({ minHeight, totalPrice, onEnd }: checkoutProps) => {
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
          paddingVertical: SIZES.spacing.m,
        }}
      >
        <View style={{ height: 200 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: SIZES.spacing.s }}
          >
            <AddCard />
            {paymentCards.map((card) => (
              <CardComponent
                card={card}
                key={card.id}
                selected={card.id === selectedCard}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{ margin: SIZES.spacing.m }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3,
            }}
          >
            Delivery Address
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.spacing.m,
              opacity: 0.6,
            }}
          >
            <View
              style={{
                width: SIZES.width * 0.6,
              }}
            >
              <Text style={{ color: COLORS.white }}>
                Unit 15, York FarmBusiness Centre, Watling St, Towcester
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: COLORS.white }}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Line label="Total Items" value={totalPrice} />
        <Line label="Standard Delivery" value={12} />
        <Line label="Total payment" value={201.84} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider onEnd={onEnd} text={`Swipe to pay $${totalPrice}`} />
        </View>
      </View>
    </View>
  );
};

export default Checkout;
