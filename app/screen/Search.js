import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import apiSearch from "../api/apiSearch";
import { Searchbar } from "react-native-paper";
import { Image } from "react-native-elements";
import { useSelector } from "react-redux";

const BASE_IMG = "https://image.tmdb.org/t/p";
const { width } = Dimensions.get("window");

export default function Search() {
  const [search, setSearch] = useState("");
  const searchMovie = useSelector((state) => state.searchReducer.movies);

  useEffect(() => {
    // if (search.length > 2) {
    //   apiSearch.getAll(search);
    // }
    apiSearch.getAll(search);
  }, [search]);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Busca tu película"
        iconColor="#BA1E19"
        style={styles.input}
        onChangeText={(e) => setSearch(e)}
        inputStyle={{ color: "#BA1E19" }}
        placeholderTextColor="grey"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {searchMovie &&
            searchMovie.map((movie, index) => (
              <Movie movie={movie} key={index} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Movie({ movie }) {
  const { title, poster_path } = movie;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.movie}>
        {poster_path ? (
          <Image
            style={styles.image}
            source={{ uri: `${BASE_IMG}/w500${poster_path}` }}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1c1c1c",
    elevation: 0,
    borderRadius: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 48,
  },
  movie: {
    width: width / 2,
    height: 300,
    borderWidth: 1,
    borderColor: "#BA1E19",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    marginTop: "75%",
  },
});
