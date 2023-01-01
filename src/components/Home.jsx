import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrendMovies } from './movieDataBaseRequest';
import MovieDetails from './MovieDetails';

// https://image.tmdb.org/t/p/w500/lsN1wAbqCvUPKEhkEI9pQSSiTjU.jpg
// https://codesandbox.io/s/goit-textbook-lesson-9-url-params-grlik3?from-embed=&file=/src/components/ProductList.jsx
// https://www.edu.goit.global/uk/learn/5265254/31183/31256/homework

const Home = () => {
  const [trends, setTrends] = useState([]);

  const getTrending = async () => {
    const trending = await getTrendMovies();
    setTrends(trending.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  const getMovieByID = id => {
    return trends.find(movie => movie.id === id);
  };

  return (
    <>
      <ul>
        {trends.map(film => (
          <li key={film.id}>
            <a href={`https://image.tmdb.org/t/p/w500` + film.poster_path}>
              {film.original_title}
            </a>
          </li>
        ))}
      </ul>
      <Outlet />
      <h1>Move Details Test</h1>
      {/* <MovieDetails movieInfo={getMovieByID} /> */}
    </>
  );
};

export default Home;
