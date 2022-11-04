import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const SellerMainScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Seller Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A62F8",
    alignItems: "center",
    justifyContent: "center",
  },
});
