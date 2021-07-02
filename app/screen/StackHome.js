import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Details from "../components/Details";

const Stack = createStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "red",
        }}
      />
    </Stack.Navigator>
  );
}
