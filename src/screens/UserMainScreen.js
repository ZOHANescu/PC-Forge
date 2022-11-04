import React from "react";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const signOutIcon = require("../../assets/signOut-icon.png");
const searchIcon = require("../../assets/search-icon.png");
const chatIcon = require("../../assets/chat-icon.png");
const cartIcon = require("../../assets/cart-icon.png");

export const UserMainScreen = ({ navigation }) => {
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
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.signOutContainer}
            onPress={handleSignOut}
          >
            <Image source={signOutIcon}></Image>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100,
            alignSelf: "center",
          }}
        >
          PC Forge
        </Text>

        <View style={styles.mainButtonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.replace("Browse");
              console.log("LOG: browse screen");
            }}
          >
            <Image source={searchIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>Browse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.replace("Chat");
              console.log("LOG: chat screen");
            }}
          >
            <Image source={chatIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>Messages</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.replace("Cart");
              console.log("LOG: cart screen");
            }}
          >
            <Image source={cartIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>My Cart</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Email: {auth.currentUser?.email}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9E7BFF",
  },
  signOutContainer: {
    alignSelf: "flex-Start",
    position: "absolute",
    marginTop: 0,
  },
  mainButtonContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
  },
  buttonStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: "#AC4FCE",
    borderRadius: 10,
    marginTop: 25,
    height: 120,
    width: 120,
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    bottom: 1,
  },
  imageStyle: {
    alignSelf: "center",
    justifyContent: "center",
    resizeMode: "contain",
    height: 60,
    width: 40,
  },
});
