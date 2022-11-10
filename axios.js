import axios from "axios";
import { _KEYMOVIES } from "./env";

const instance = axios.create({
  baseURL: "https://developers.themoviedb.org/3",
});
