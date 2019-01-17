export const moviesData = {
  popular_movies: [],
  top_movies: [],
  theaters_movies: []
};

export const queries = {
  popular:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8f5ce0ea47bf6195e5d89ca336e65d2b&page=",
  top_rated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8f5ce0ea47bf6195e5d89ca336e65d2b&page=",
  theaters:
    "https://api.themoviedb.org/3/movie/now_playing?api_key=8f5ce0ea47bf6195e5d89ca336e65d2b&page="
};

export function getData(arr, str) {
  for (let i = 1; i < 11; i++) {
    moviesData[arr].push(str + i);
  }
}

export const movieUrl = "https://api.themoviedb.org/3/movie/";
export const key = "8f5ce0ea47bf6195e5d89ca336e65d2b";
