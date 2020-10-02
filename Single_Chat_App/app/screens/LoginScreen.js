import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    name: "",
  };
  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };
  render() {
    return (
      <View>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}>
          <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnBIKU-gfwOILoSqWCCDekPR-3xQalLYYqlg&usqp=CAU",
            }}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Kabilesh's App"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    top: -20,
    left: -120,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600",
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#9075E3",
    alignItems: "center",
    justifyContent: "center",
  },
});
