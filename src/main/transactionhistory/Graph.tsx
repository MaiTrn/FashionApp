import React from "react";
import { View } from "react-native";
import moment from "moment";
import Animated, { divide, multiply, sub } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import { useTransition } from "react-native-redash/lib/module/v1";

import "intl";
import "intl/locale-data/jsonp/en";

import { COLORS, SIZES } from "../../../constants";
import { lerp } from "../../components/Helpers";

import Underlay from "./components/Underlay";

const formatter = Intl.DateTimeFormat("en", {
  month: "numeric",
});

export interface DataPoint {
  id: number;
  date: number;
  value: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}
const aspectRatio = 195 / 305;

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const canvasWidth = SIZES.width - SIZES.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - SIZES.spacing.xl;
  const height = canvasHeight - SIZES.spacing.xl;
  const values = data.map((p) => p.value);
  const step = width / numberOfMonths;
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  //const dates = data.map((p) => p.date);
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);

  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, { duration: 650 });

  return (
    <View
      style={{
        marginTop: SIZES.spacing.l,
        paddingBottom: SIZES.spacing.xl,
        paddingLeft: SIZES.spacing.xl,
      }}
    >
      <Underlay {...{ minY, maxY, step, startDate, numberOfMonths }} />
      <View
        style={{
          width,
          height,
          overflow: "hidden",
        }}
      >
        {data.map((point) => {
          const i = Math.floor(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );
          const totalHeight = lerp(0, height, point.value / maxY);
          const currentHeight = multiply(totalHeight, transition);
          const translateY = divide(sub(totalHeight, currentHeight), 2);

          //new Date(point.date - startDate).getMonth();
          return (
            <Animated.View
              key={point.date}
              style={{
                position: "absolute",
                width: step,
                height: totalHeight,
                left: i * step,
                bottom: 0,
                transform: [{ translateY }, { scaleY: transition }],
              }}
            >
              {/* Line */}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 13,
                  right: 13,
                  opacity: 0.1,
                  backgroundColor:
                    COLORS.month[formatter.format(new Date(point.date))],
                  borderTopLeftRadius: SIZES.borderRadius.m,
                  borderTopRightRadius: SIZES.borderRadius.m,
                }}
              />
              {/* Top Node */}
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  height: 32,
                  left: 13,
                  right: 13,
                  backgroundColor:
                    COLORS.month[formatter.format(new Date(point.date))],
                  borderRadius: SIZES.borderRadius.m,
                }}
              />
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default Graph;
