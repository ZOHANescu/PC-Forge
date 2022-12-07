import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import appColorConstants from "../utils/app-color-constants";

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
    backgroundColor: appColorConstants.BACKGROUND_BEIGE,
    alignItems: "center",
    justifyContent: "center",
  },
});
