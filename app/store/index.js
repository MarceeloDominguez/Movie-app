import { createStore, combineReducers } from "redux";
import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";
import genreMoviesReducer from "./genreMoviesReducer";
import searchReducer from "./searchReducer";
import trendingReducer from "./trendingReducer";
import favoritesReducer from "./favoritesReducer";

const combinedReducers = combineReducers({
  authReducer,
  moviesReducer,
  genreMoviesReducer,
  searchReducer,
  trendingReducer,
  favoritesReducer,
});

const store = createStore(combinedReducers);
export default store;
