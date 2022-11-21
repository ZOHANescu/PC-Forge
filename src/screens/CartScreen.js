import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CartScreen = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9E7BFF",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "purple",
    marginTop: 10,
  },
});

export default CartScreen;
