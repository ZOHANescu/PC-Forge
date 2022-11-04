import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const BrowseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>BrowseScreen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("User")}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
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

export default BrowseScreen;
