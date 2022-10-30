import axios from "axios";

const API_KEY = "642a5bd4929719a2e96a6dbd2cfb8311";

export function getTrending() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
}
export function getByQuery(query) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(response => response.data.results);
}
export function getMovieDetails(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data);
}
export function getMovieCredits(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data);
}
export function getMovieReviews(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data.results);
}
