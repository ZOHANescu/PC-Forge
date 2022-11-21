import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppColorConstants from "../utils/app-color-constants";

const BrowseScreen = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9E7BFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BrowseScreen;
