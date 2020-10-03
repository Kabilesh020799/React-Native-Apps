import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
  },
});

export default styles;
