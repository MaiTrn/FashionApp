import React, { useLayoutEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";

import { Header } from "../../components";
import { COLORS, SIZES } from "../../../constants";
import { HomeNavigationProps } from "../../components/Navigation";
import { defaultOutfits } from "../../components/DummyData";

import Footer from "./components/Footer";
import Outfit from "./Outfit";
import TopCurve from "./components/TopCurve";

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const [outfits, setOutfits] = React.useState(defaultOutfits);
  const [edit, setEdit] = React.useState(false);
  const footerHeight = SIZES.width / 4;

  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  );
  const list = useRef<TransitioningView>(null);

  useLayoutEffect(() => {
    list.current?.animateNextTransition();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{
          icon: edit ? "close" : "square-edit-outline",
          onPress: () => setEdit((prev) => !prev),
        }}
        label="Favorite Outfits"
        dark={false}
      />
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: SIZES.borderRadius.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={list} transition={transition}>
            <View style={{ flexDirection: "row" }}>
              <View>
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} editable={edit} />
                  ))}
              </View>
              <View>
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} editable={edit} />
                  ))}
              </View>
            </View>
          </Transitioning.View>
        </ScrollView>
        <TopCurve footerHeight={footerHeight} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: footerHeight,
          }}
        >
          <Footer
            label={edit ? "Remove from favories" : "Add more to favorites"}
            onPress={() => {
              list.current?.animateNextTransition();
              edit
                ? setOutfits(outfits.filter((outfit) => !outfit.selected))
                : navigation.navigate("OutfitIdeas");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FavoriteOutfits;
