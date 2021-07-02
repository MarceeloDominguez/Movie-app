import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import StackHome from "../screen/StackHome";
import Watch from "../screen/Watch";
import Search from "../screen/Search";
import Login from "../screen/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();
const LoginStack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      activeColor="#BA1E19"
      inactiveColor="#dedede"
      barStyle={{ backgroundColor: "#0f0f0f", padding: 4 }}
      shifting={false}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              type="material-community"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon
              name="play-circle-outline"
              type="material-community"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon
              name="magnify"
              type="material-community"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon
              name="account-outline"
              type="material-community"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const LoginNavigation = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

export default function NavigationResolver() {
  const sesion = useSelector((state) => state.authReducer.sesion);
  const dispatch = useDispatch();

  const recoverSesion = async () => {
    const sesionRecovered = await AsyncStorage.getItem("sesion");
    if (sesionRecovered && sesionRecovered === "1") {
      const userData = await AsyncStorage.getItem("userData");
      dispatch({
        type: "loginAction",
        payload: JSON.parse(userData),
      });
    }
  };

  useEffect(() => {
    recoverSesion();
  }, []);

  return (
    <NavigationContainer>
      {sesion ? <TabNavigator /> : <LoginNavigation />}
    </NavigationContainer>
  );
}
