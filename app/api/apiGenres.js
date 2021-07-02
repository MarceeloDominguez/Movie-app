import store from "../store/index";
const API_KEY = "12d10c232e8351a4c3f0cb470674403d";

const apiGenres = {
  getAll: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();

      store.dispatch({
        type: "getAllGenresSuccess",
        payload: data.genres,
      });
    } catch (error) {
      console.log(error, "genres");
    }
  },
};

export default apiGenres;
