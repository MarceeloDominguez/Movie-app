const initialState = {
  error: false,
  genres: [],
};

const genreMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllGenresSuccess": {
      return {
        error: false,
        genres: action.payload,
      };
    }
    default:
      return state;
  }
};

export default genreMoviesReducer;
