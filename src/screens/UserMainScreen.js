import React from "react";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import appColorConstants from "../utils/app-color-constants";

const signOutIcon = require("../../assets/signOut-icon.png");
const searchIcon = require("../../assets/search-icon.png");
const chatIcon = require("../../assets/chat-icon.png");
const cartIcon = require("../../assets/cart-icon.png");

export const UserMainScreen = (props) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace("Login");
        console.log("LOG: Signed out");
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
            <Image 
                source={signOutIcon} 
                style={{
                    resizeMode: 'contain',
                    height: 65,
                    width: 65
                }}
            />
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
              props.navigation.navigate("Browse");
              console.log("LOG: browse screen");
            }}
          >
            <Image source={searchIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>Browse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              props.navigation.navigate("Chat");
              console.log("LOG: chat screen");
            }}
          >
            <Image source={chatIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>Messages</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              props.navigation.navigate("Orders");
              console.log("LOG: orders screen");
            }}
          >
            <Image source={cartIcon} style={styles.imageStyle}></Image>
            <Text style={styles.buttonText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
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
    backgroundColor: appColorConstants.BACKGROUND_BEIGE,
  },
  signOutContainer: {
    alignSelf: "flex-Start",
    position: "absolute",
    marginTop: 0,
  },
  mainButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: appColorConstants.COLOR_LAVANDER,
    borderRadius: 10,
    marginTop: 25,
    height: 135,
    width: 135,
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
