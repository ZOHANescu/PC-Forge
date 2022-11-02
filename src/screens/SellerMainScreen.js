import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";

export const SellerMainScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>

        <Pressable style={styles.button} onPress={handleSignOut}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>
    </>
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "purple",
    marginTop: 10,
  },
});
