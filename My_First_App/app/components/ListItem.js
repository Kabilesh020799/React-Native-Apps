import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText/AppText";

function ListItem(props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={props.onPress}>
        <View style={styles.container}>
          {props.ImageComponent}
          {props.image && <Image style={styles.image} source={props.image} />}
          <View style={styles.details}>
            <AppText style={styles.title}>{props.title}</AppText>
            {props.subTitle && (
              <AppText style={styles.subTitle}>{props.subTitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: "#6e6969",
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
