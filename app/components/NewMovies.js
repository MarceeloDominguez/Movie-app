import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import { Title, Caption } from "react-native-paper";
import { Image } from "react-native-elements";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Dimensions.get("window").width * 0.8;
const BASE_IMG = "https://image.tmdb.org/t/p";

export default function NewMovies({ navigation }) {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const genres = useSelector((state) => state.genreMoviesReducer.genres);

  return (
    <Carousel
      layout={"default"}
      data={movies}
      renderItem={(item) => (
        <RenderItems data={item} navigation={navigation} genres={genres} />
      )}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
      inactiveSlideOpacity={0.4}
      initialScrollIndex={0}
    />
  );
}

function RenderItems({ data, navigation, genres }) {
  const { title, poster_path, genre_ids, id } = data.item;
  const image = `${BASE_IMG}/w500${poster_path}`;

  getGeneroById = (id) => {
    const genre = genres.find((genero) => {
      if (genero.id === id) {
        return genero;
      }
    });
    return genre ? genre : { name: "" };
  };

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Details", data.item, getGeneroById(id))
      }
    >
      <View>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {genre_ids.map((id) => {
            return (
              <Caption style={styles.genre} key={id}>
                {getGeneroById(id).name ?? ""}
              </Caption>
            );
          })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 440,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 20,
    fontSize: 15,
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
});
