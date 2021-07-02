import store from "../store/index";
const API_KEY = "12d10c232e8351a4c3f0cb470674403d";

const apiMovies = {
  getAll: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();

      store.dispatch({
        type: "getAllMovieSuccess",
        payload: data.results,
      });
    } catch (error) {
      console.log(error, "error");
    }
  },
};

export default apiMovies;
