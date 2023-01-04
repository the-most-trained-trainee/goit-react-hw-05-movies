import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/movies">Movies</Link>
        <hr />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
