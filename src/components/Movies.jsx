import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getFoundMovies } from './movieDataBaseRequest';

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const handleChange = e => setSearchInput(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      alert('Please enter a valid request!');
      return;
    }
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
          <li key={film.id}>{film.original_title}</li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
