import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Title, Caption } from "react-native-paper";
import { Icon } from "react-native-elements";
import { Rating } from "react-native-ratings";

const BASE_IMG = "https://image.tmdb.org/t/p";
const width = Dimensions.get("window").width;

export default function Details({ route }) {
  const movie = route.params;
  const image = `${BASE_IMG}/w500${movie.poster_path}`;
  const mapId = movie.genre_ids;

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "#1c1c1c" }}
      >
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="stretch"
        />
        <MovieTrailer />
        <MovieTitle movie={movie} />
        <View style={styles.genres}>
          {mapId.map((id) => {
            return (
              <Caption style={styles.genre} key={id}>
                {getGeneroById(id).name ?? ""}
              </Caption>
            );
          })}
        </View>
        <MovieRating vote_average={movie.vote_average} />
        <Caption style={styles.overview}>{movie.overview}</Caption>
        <Caption style={[styles.overview, { marginBottom: 30 }]}>
          Fecha de lanzamiento: {movie.release_date}
        </Caption>
      </ScrollView>
    </>
  );
}

function MovieTitle({ movie }) {
  return (
    <View>
      <Title style={styles.title}>{movie.title}</Title>
    </View>
  );
}

function MovieRating({ vote_average }) {
  const media = vote_average / 2;

  return (
    <View style={styles.viewRating}>
      <Rating
        type="custom"
        ratingColor="#ffc205"
        ratingBackgroundColor="#c8c7c8"
        imageSize={20}
        tintColor="#1c1c1c"
        startingValue={media}
        style={{ marginRight: 15 }}
      />
    </View>
  );
}

function MovieTrailer() {
  return (
    <View style={styles.viewPlay}>
      <Icon
        name="play"
        type="material-community"
        color="#BA1E19"
        size={30}
        iconStyle={{ marginTop: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 500,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  viewPlay: {
    position: "absolute",
    top: 420,
    right: 20,
    borderWidth: 0.1,
    width: 60,
    height: 60,
    borderColor: "#BA1E19",
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  title: {
    marginHorizontal: 20,
    marginTop: 5,
    color: "#fff",
  },
  genres: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
  genre: {
    color: "#8997a5",
    fontSize: 12,
    marginRight: 10,
  },
  viewRating: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  overview: {
    marginHorizontal: 20,
    marginBottom: 10,
    color: "#8697a5",
    textAlign: "justify",
  },
});
