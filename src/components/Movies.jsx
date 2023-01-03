import { useState } from 'react';
import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { getFoundMovies } from './movieDataBaseRequest';

//https://youtu.be/pSPXlJFn1Bw?t=2824

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

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
    receiveFound();
  };

  const receiveFound = async () => {
    const found = await getFoundMovies(searchInput);
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
        {foundMovies.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`}>{film.original_title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
};

export default Movies;
