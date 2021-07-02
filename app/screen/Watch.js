import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Title, Card } from "react-native-paper";
import { useSelector } from "react-redux";
import store from "../store/index";

const BASE_IMG = "https://image.tmdb.org/t/p";

export default function Watch() {
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  console.log(favorites, "FAVORITOS");

  const removeFavorite = (i) => {
    store.dispatch({
      type: "removeMovieFavorites",
      payload: i,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#1c1c1c" }}
    >
      <Title style={styles.title}>Mi lista</Title>
      {favorites.map((item, i) => (
        <Card key={i} style={styles.viewCard}>
          <Card.Cover
            source={{ uri: `${BASE_IMG}/w500${item.backdrop_path}` }}
          />
          <Card.Content>
            {item.title ? (
              <Title style={styles.titleMovie}>{item.title}</Title>
            ) : (
              <Title style={styles.titleMovie}>{item.original_name}</Title>
            )}
            <TouchableOpacity
              onPress={() => removeFavorite(i)}
              style={styles.viewIcon}
            >
              <Icon
                name="thumb-down"
                type="material-community"
                color="#BA1E19"
              />
            </TouchableOpacity>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  titleMovie: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
  },
  viewCard: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "#494949",
    margin: 10,
    borderRadius: 10,
  },
  viewIcon: {
    position: "absolute",
    left: 290,
    top: -50,
    padding: 5,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
