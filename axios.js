import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=${_KEYMOVIES}&language=en-US",
});
