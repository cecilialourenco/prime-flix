// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=994887b112ee72888a86df5ac5ef87a0&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default api;
