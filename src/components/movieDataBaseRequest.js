const API_KEY = '8562b39677dad16e2334fc338fdc606e';

const getTrendMovies = async () => {
  const trendMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return trendMovies.json();
}

const getFoundMovies = async (request) => {
  const foundMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${request}&page=1&include_adult=false`);
  return foundMovies.json();
}

const movieDetailsAdaptation = input => {
  return {
    id: input.id,
    title: input.title,
    overview: input.overview,
    release_date: input.release_date,
    genres: input.genres,
    popularity: input.popularity,
    vote_average: input.vote_average,
    poster_path: input.poster_path,
  };
};

const getMovieByID = async (id) => {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const movieReceived = await movie.json();
  const movieAdapted = movieDetailsAdaptation(movieReceived);
  return movieAdapted;
};

const reviewsAdapation = input =>
  input.map(review => ({
    id: review.id,
    author: review.author,
    content: review.content,
  }));

const getMovieReviews = async (id) => {
  const reviews = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  const reviewsJson = await reviews.json();
  const reviewsReceived = reviewsJson.results;
  const adaptedReviews = reviewsAdapation(reviewsReceived);
  return adaptedReviews;
}

const castAdapation = input =>
  input.map(actor => ({
    id: actor.credit_id,
    name: actor.name,
    character: actor.character,
    profile_path: actor.profile_path,
  }));

const getMovieCast = async (id) => {
  const cast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  const castJson = await cast.json();
  const castReceived = castJson.cast;
  const adaptedCast = castAdapation(castReceived);
  return adaptedCast;
}

export { getTrendMovies, getFoundMovies, getMovieByID, getMovieReviews, getMovieCast };