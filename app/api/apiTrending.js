import store from "../store/index";
const API_KEY = "12d10c232e8351a4c3f0cb470674403d";

const apiTrending = {
  getAll: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
      );
      const data = await response.json();

      store.dispatch({
        type: "getAllTrendingMovie",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default apiTrending;
