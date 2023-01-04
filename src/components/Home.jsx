import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getTrendMovies } from './movieDataBaseRequest';

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
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{ from: '/' }}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Home;
