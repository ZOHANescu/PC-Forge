import React, { useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

import appColorConstants from "../utils/app-color-constants";

import { auth } from "../../firebase";

export const LoginScreen = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        props.navigation.replace("User");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with " + user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>PC-Forge</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={appColorConstants.COLOR_BLACK}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={appColorConstants.COLOR_BLACK}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize='none'
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Text style={styles.registerHereText}>
          Don't have an account? Create one here!
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.loginText}>Create account</Text>
        </Pressable>
      </KeyboardAvoidingView>
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
  input: {
    height: 35,
    width: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: appColorConstants.COLOR_LAVANDER,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: appColorConstants.COLOR_PURPLE,
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
  registerHereText: {
    marginTop: 10,
  },
});
