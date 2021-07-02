const initialState = {
  error: false,
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addMovieToFavorites": {
      return {
        error: false,
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case "removeMovieFavorites": {
      return {
        error: false,
        ...state,
        favorites: state.favorites.filter((item, i) => i !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default favoritesReducer;
