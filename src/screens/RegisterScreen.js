import React from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";

export const RegisterScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Enter a username</Text>
        <TextInput style={styles.input} placeholder="username" />
        <Text>Enter a password</Text>
        <TextInput style={styles.input} placeholder="password" />
        <Pressable style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9E7BFF",
  },
  input: {
    height: 35,
    width: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#CCCCFF",
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "purple",
    marginTop: 10,
  },
  registerText: {
    color: "white",
  },
});
