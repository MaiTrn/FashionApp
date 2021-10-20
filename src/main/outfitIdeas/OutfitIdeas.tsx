import React, { useState } from "react";
import { View } from "react-native";
import { useTiming } from "react-native-redash";

import { COLORS } from "../../../constants";
import { Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { cards } from "../../components/DummyData";

import Background from "./components/Background";
import Card from "./Card";
import Categories from "./Categories";
import OutfitControls from "./components/OutfitControls";

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-outline", onPress: () => console.log("left") }}
        label="Outfit Ideas"
        dark={false}
      />
      {/* <Categories /> */}
      <View style={{ flex: 1 }}>
        <Background />
        <Categories />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                index={index}
                aIndex={aIndex}
                step={step}
                source={source}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            )
        )}
        <OutfitControls />
      </View>
    </View>
  );
};

export default OutfitIdeas;
