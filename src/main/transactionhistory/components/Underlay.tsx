/* eslint-disable no-nested-ternary */
import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import moment from "moment";
import { View, StyleSheet, Text } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";
import { lerp } from "../../../components/Helpers";

const ROW_HEIGHT = 16;

interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({
  minY,
  maxY,
  step,
  numberOfMonths,
  startDate,
}: UnderlayProps) => {
  const minDate = moment(startDate);
  return (
    <View style={StyleSheet.absoluteFill}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {[1, 0.66, 0.33, 0].map((prog) => {
          return (
            <View
              key={prog}
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: ROW_HEIGHT,
                top:
                  prog === 0
                    ? ROW_HEIGHT / 2
                    : prog === 1
                    ? -ROW_HEIGHT / 2
                    : 0,
              }}
            >
              <View
                style={{
                  width: SIZES.spacing.xl,
                  paddingRight: SIZES.spacing.s,
                }}
              >
                <Text style={styles.xText}>
                  {Math.round(lerp(minY, maxY, prog))}
                </Text>
              </View>
              <View style={styles.lines} />
            </View>
          );
        })}
      </View>
      <View style={styles.yAxis}>
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <View key={index} style={{ width: step }}>
              <Text style={styles.yText}>{date.format("MMM")}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Underlay;

const styles = StyleSheet.create({
  yText: {
    color: COLORS.text.small,
    textAlign: "center",
    ...FONTS.body2,
  },
  xText: {
    color: COLORS.text.small,
    textAlign: "right",
    ...FONTS.body2,
  },
  yAxis: {
    marginLeft: SIZES.spacing.xl,
    flexDirection: "row",
    alignItems: "center",
    height: SIZES.spacing.xl,
  },
  lines: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray,
  },
});
