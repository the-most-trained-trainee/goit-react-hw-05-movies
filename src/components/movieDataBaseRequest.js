const API_KEY = '8562b39677dad16e2334fc338fdc606e';

const getTrendMovies = async () => {
  const trendMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return trendMovies.json();
}

const getFoundMovies = async (request) => {
  const foundMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${request}&page=1&include_adult=false`);
  return foundMovies.json();
}

// export const getProductById = (productId) => {
//   return products.find((product) => product.id === productId);
// };

const getMovieByID = async (id) => {

  const movie = await fetch(`https://api.themoviedb.org/3/movie/899112?api_key=8562b39677dad16e2334fc338fdc606e&language=en-US`);

  
  // const movie = await fetch(`https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);


  return movie.json();
};

export { getTrendMovies, getFoundMovies, getMovieByID };