import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>PC-Forge</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <Pressable
          style={styles.button}
          title="Log in"
          onPress={() => console.log("test")}
        >
          <Text style={styles.loginText}>Login</Text>
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
  input: {
    height: 35,
    width: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#CCCCFF",
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
  loginText: {
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
