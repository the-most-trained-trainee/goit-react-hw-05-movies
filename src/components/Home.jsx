import { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import { getTrendMovies } from './movieDataBaseRequest';

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

  return (
    <>
      <ul>
        {trends.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
