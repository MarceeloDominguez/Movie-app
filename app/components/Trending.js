import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import { Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import store from "../store/index";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Dimensions.get("window").width * 0.9;
const BASE_IMG = "https://image.tmdb.org/t/p";

export default function Trending() {
  const trending = useSelector((state) => state.trendingReducer.trending);

  return (
    <Carousel
      layout="default"
      data={trending}
      renderItem={(item) => <RenderTrending data={item} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
      firstItem={0}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
    />
  );
}

function RenderTrending({ data }) {
  const { title, backdrop_path, original_name } = data.item;

  const agregarItem = () => {
    store.dispatch({
      type: "addMovieToFavorites",
      payload: data.item,
    });
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: `${BASE_IMG}/w500${backdrop_path}` }}
        resizeMode="contain"
      />
      {title ? (
        <Title style={styles.title}>{title}</Title>
      ) : (
        <Title style={styles.title}>{original_name}</Title>
      )}
      <TouchableOpacity
        onPress={() => agregarItem()}
        style={styles.iconContainer}
      >
        <Icon name="thumb-up" type="material-community" color="#BA1E19" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  image: {
    height: 180,
    width: 320,
    borderRadius: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: 140,
    left: 270,
    padding: 5,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
