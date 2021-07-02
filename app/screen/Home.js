import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Title } from "react-native-paper";
import apiGenres from "../api/apiGenres";
import apiMovies from "../api/apiMovies";
import apiTrending from "../api/apiTrending";
import NewMovies from "../components/NewMovies";
import Trending from "../components/Trending";

export default function Home({ navigation }) {
  useEffect(() => {
    apiMovies.getAll();
    apiGenres.getAll();
    apiTrending.getAll();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#1c1c1c" }}
    >
      <StatusBar backgroundColor="#1c1c1c" barStyle="light-content" />
      <View>
        <Title style={styles.title}>Nuevas series y películas</Title>
        <NewMovies navigation={navigation} />
      </View>
      <View>
        <Title style={styles.title}>Tendencias</Title>
        <Trending />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
