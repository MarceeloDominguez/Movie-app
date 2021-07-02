const initialState = {
  error: false,
  trending: [],
};

const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllTrendingMovie": {
      return {
        error: false,
        trending: action.payload,
      };
    }

    default:
      return state;
  }
};

export default trendingReducer;
