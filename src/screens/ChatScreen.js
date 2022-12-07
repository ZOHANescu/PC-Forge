import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import appColorConstants from "../utils/app-color-constants";

const ChatScreen = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColorConstants.BACKGROUND_BEIGE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
