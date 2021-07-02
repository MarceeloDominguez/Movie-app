import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Icon, Button, Input, Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { useDispatch } from "react-redux";

const height = Dimensions.get("window").height;

export default function Login() {
  const [formData, setformData] = useState(valueForm);
  const dispatch = useDispatch();

  const onChange = (e, type) => {
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  const Login = async () => {
    if (formData.email !== "" && formData.user !== "") {
      const userData = {
        useremail: formData.email,
        username: formData.user,
      };

      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      await AsyncStorage.setItem("sesion", "1");

      dispatch({
        type: "loginAction",
        payload: userData,
      });
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.viewContainer}>
        <StatusBar backgroundColor="#1c1c1c" />
        <Image
          source={require("../../assets/img/netflix.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          inputStyle={{ color: "#fff" }}
          onChange={(e) => onChange(e, "email")}
          rightIcon={
            <Icon name="at" type="material-community" color="#BA1E19" />
          }
        />
        <Input
          placeholder="Usuario"
          containerStyle={styles.inputForm}
          inputStyle={{ color: "#fff" }}
          onChange={(e) => onChange(e, "user")}
          rightIcon={
            <Icon
              name="account-outline"
              type="material-community"
              color="#BA1E19"
            />
          }
        />
        <Button
          title="Iniciar sesión"
          containerStyle={styles.btnContainerLogin}
          buttonStyle={{ backgroundColor: "#BA1E19" }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={() => Login()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

function valueForm() {
  return {
    email: "",
    user: "",
  };
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    height: height,
  },
  inputForm: {
    marginTop: 20,
    width: "100%",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  image: {
    width: 300,
    height: 300,
  },
});
