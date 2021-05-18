import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";

function RoundedButton({ style = {}, textStyle = {}, size = 125, ...props }) {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} {...props}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });

export default RoundedButton;
