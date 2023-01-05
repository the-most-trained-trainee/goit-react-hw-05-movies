import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <h2>Trending today</h2>
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
