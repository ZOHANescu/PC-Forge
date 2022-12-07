import React from "react";

import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

import appColorConstants from "../utils/app-color-constants";

import { auth } from "../../firebase";

export const RegisterScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Text>Enter a valid email</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Email"
          placeholderTextColor={appColorConstants.COLOR_BLACK}
        />

        <Text>Enter a password</Text>

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          placeholderTextColor={appColorConstants.COLOR_BLACK}
          secureTextEntry
        />

        <Pressable style={styles.registerButton}>
          <Text style={styles.registerText} onPress={handleRegistration}>
            Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColorConstants.BACKGROUND_BEIGE,
  },
  input: {
    height: 35,
    width: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: appColorConstants.COLOR_LAVANDER,
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: appColorConstants.COLOR_PURPLE,
    marginTop: 10,
  },
  registerText: {
    color: "white",
  },
});
