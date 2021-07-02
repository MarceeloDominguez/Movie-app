const initialState = {
  error: false,
  movies: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllSearchMovie": {
      return {
        error: false,
        movies: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
