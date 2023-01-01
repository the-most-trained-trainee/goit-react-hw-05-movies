import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getTrendMovies } from './movieDataBaseRequest';
import MovieDetails from './MovieDetails';

// https://image.tmdb.org/t/p/w500/lsN1wAbqCvUPKEhkEI9pQSSiTjU.jpg

const Home = () => {
  const [trends, setTrends] = useState([]);

  const getTrending = async () => {
    const trending = await getTrendMovies();
    setTrends(trending.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <ul>
        {trends.map(film => (
          <li key={film.id}>{film.original_title}</li>
        ))}
      </ul>
      <Outlet />
      <h1>Move Details Test</h1>
      <MovieDetails />
    </>
  );
};

export default Home;
