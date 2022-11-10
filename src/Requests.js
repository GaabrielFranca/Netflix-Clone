const requests = {
  fetchAllCategory: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US`,

  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_genres=35&with_networks=213`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_genres=27&with_networks=213`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_genres=10749&with_networks=213`,
  fetchDocumentariesMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_networks=213`,
  fetchActionsMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEYMOVIES}&language=en-US&with_genres=28&with_networks=213`,
};

export default requests;
