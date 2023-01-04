import { useState, useEffect } from 'react';
import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { getFoundMovies } from './movieDataBaseRequest';

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchInput(searchParams.get('query'));
      receiveFound(searchParams.get('query'));
    }
  }, [searchParams]);

  const handleChange = e => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      alert('Please enter a valid request!');
      return;
    }
    setSearchParams({ query: searchInput });
  };

  const receiveFound = async request => {
    const found = await getFoundMovies(request);
    setFoundMovies(found.results);
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <button type="submit" className="">
          <span className="">Search</span>
        </button>
        <input
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={searchInput}
        />
      </form>
      <ul>
        {foundMovies &&
          foundMovies.map(film => (
            <li key={film.id}>
              <Link
                to={`${film.id}`}
                state={{ from: '/movies?query=' + searchInput }}
              >
                {film.original_title}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
