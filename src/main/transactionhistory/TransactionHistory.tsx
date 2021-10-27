import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Header } from "../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { HomeNavigationProps } from "../../components/Navigation";
import { transactionData } from "../../components/Data";

import Footer from "./components/Footer";
import Graph from "./Graph";
import Transaction from "./Transaction";

const startDate = new Date("2019-08-01").getTime();
const numberOfMonths = 8;

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const footerHeight = SIZES.width / 4;

  function totalValue(total, cur) {
    return total + cur.value;
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => console.log("left") }}
        label="Transaction History"
      />
      <View
        style={{
          flex: 1,
          padding: SIZES.spacing.m,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View>
            <Text
              style={{
                color: COLORS.text.primary,
                opacity: 0.3,
                ...FONTS.body5,
              }}
            >
              TOTAL SPENT
            </Text>
            <Text style={{ color: COLORS.text.primary, ...FONTS.h1 }}>
              ${transactionData.reduce(totalValue, 0).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              paddingVertical: SIZES.spacing.s,
              paddingHorizontal: SIZES.spacing.m,
            }}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: SIZES.borderRadius.l,
                backgroundColor: COLORS.primary,
                opacity: 0.11,
              }}
            />
            <Text style={{ color: COLORS.primary, ...FONTS.label }}>
              All time
            </Text>
          </TouchableOpacity>
        </View>
        <Graph data={transactionData} {...{ startDate, numberOfMonths }} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: footerHeight }}
        >
          {transactionData.map((transaction, index) => {
            if (transaction.id !== 0)
              return <Transaction key={index} transaction={transaction} />;
          })}
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: footerHeight,
        }}
      >
        <Footer footerHeight={footerHeight} />
      </View>
    </View>
  );
};

export default TransactionHistory;
