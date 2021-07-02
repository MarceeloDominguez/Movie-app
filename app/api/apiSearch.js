import store from "../store/index";
const API_KEY = "12d10c232e8351a4c3f0cb470674403d";

const apiSearch = {
  getAll: async (search) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${search}`
      );
      const data = await response.json();

      store.dispatch({
        type: "getAllSearchMovie",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default apiSearch;
