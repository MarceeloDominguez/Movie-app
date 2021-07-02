import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authReducer);

  const Logout = async () => {
    await AsyncStorage.setItem("sesion", "0");

    dispatch({
      type: "logoutAction",
    });
  };

  return (
    <View style={styles.viewContainer}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: "#fff" }}>Email: {userData.useremail}</Text>
        <Text style={{ color: "#fff" }}>Nombre: {userData.username}</Text>
      </View>
      <Button
        title="Cerrar sesión"
        titleStyle={{ fontWeight: "bold" }}
        containerStyle={styles.btnContainerLogin}
        buttonStyle={{ backgroundColor: "#BA1E19" }}
        onPress={() => Logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
});
