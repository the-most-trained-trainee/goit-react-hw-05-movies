const API_KEY = '8562b39677dad16e2334fc338fdc606e';

const getTrendMovies = async () => {
  const trendMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return trendMovies.json();
}

const getFoundMovies = async (request) => {
  const foundMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${request}&page=1&include_adult=false`);
  return foundMovies.json();
}

const getMovieByID = async (id) => {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return movie.json();
};

const getMovieReviews = async (id) => {
  const reviews = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  const reviersReady = await reviews.json()
  return reviersReady.results;
}

const getMovieCast = async (id) => {
  const cast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
  return cast.json();
}

export { getTrendMovies, getFoundMovies, getMovieByID, getMovieReviews, getMovieCast };