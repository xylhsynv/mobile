import React from "react";

import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
  StyleProp,
} from "react-native";
import { colors } from "../theme/color";

interface IHeader {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}
export const Header: React.FC<IHeader> = ({ left, right, title, style }) => {
  return (
    <View style={[styles.root, style]}>
      {left}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {right}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Nunito-Bold",
    color: colors.white,
    fontSize: 18,
    lineHeight: 21,
  },
});
