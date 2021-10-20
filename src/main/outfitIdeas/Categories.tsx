import React from "react";
import { ScrollView } from "react-native";

import { categories } from "../../components/DummyData";

import Category from "./components/Category";

const Categories = () => {
  return (
    //  <View>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ScrollView>
    //  </View>
  );
};

export default Categories;
