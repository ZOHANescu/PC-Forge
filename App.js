import React from "react";

import { LoginScreen } from "./src/screens/LoginScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { UserMainScreen } from "./src/screens/UserMainScreen";
import { SellerMainScreen } from "./src/screens/SellerMainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BrowseScreen from "./src/screens/BrowseScreen";
import CartScreen from "./src/screens/CartScreen";
import ChatScreen from "./src/screens/ChatScreen";

import appColorConstants from "./src/utils/app-color-constants";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerStyle: {
              backgroundColor: appColorConstants.COLOR_LAVANDER,
            },
            headerTintColor: appColorConstants.HEADER_FONT_COLOR,
          }}
        />
        <Stack.Screen
          name="User"
          component={UserMainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Seller"
          component={SellerMainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Browse"
          component={BrowseScreen}
          options={{
            headerStyle: {
              backgroundColor: appColorConstants.COLOR_LAVANDER,
            },
            headerTintColor: appColorConstants.HEADER_FONT_COLOR,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerStyle: {
              backgroundColor: appColorConstants.COLOR_LAVANDER,
            },
            headerTintColor: appColorConstants.HEADER_FONT_COLOR,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerStyle: {
              backgroundColor: appColorConstants.COLOR_LAVANDER,
            },
            headerTintColor: appColorConstants.HEADER_FONT_COLOR,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
