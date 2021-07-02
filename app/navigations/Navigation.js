import React from "react";
import { View, Text } from "react-native";
import NavigationResolver from "./NavigationResolver";
import { Provider } from "react-redux";
import store from "../store";

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationResolver />
    </Provider>
  );
}
