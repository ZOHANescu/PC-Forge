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

const Stack = createNativeStackNavigator();

export default function App() {
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
          options={{ headerShown: false }}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
