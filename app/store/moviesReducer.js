const initialState = {
  error: false,
  movies: [],
 
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllMovieSuccess": {
      return {
        error: false,
        movies: action.payload,
      };
    }

    default:
      return state;
  }
};

export default moviesReducer;
