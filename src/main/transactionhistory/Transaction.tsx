import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

import { COLORS, FONTS, SIZES } from "../../../constants";

import { DataPoint } from "./Graph";

const colorFormatter = Intl.DateTimeFormat("en", {
  month: "numeric",
});

interface TransactionProps {
  transaction: DataPoint;
}
const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor:
                COLORS.month[colorFormatter.format(new Date(transaction.date))],
              ...styles.dot,
            }}
          />
          <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
            #{transaction.id}
          </Text>
        </View>
        <Text style={{ color: COLORS.text.small, ...FONTS.body1 }}>
          {`$${transaction.value} - ${moment(transaction.date).format(
            "DD MMMM, YYYY"
          )}`}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={{ color: COLORS.secondary, ...FONTS.label }}>
          See more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.spacing.m,
  },
  dot: {
    width: SIZES.spacing.s,
    height: SIZES.spacing.s,
    borderRadius: SIZES.spacing.s / 2,
    marginRight: SIZES.spacing.s,
  },
});
