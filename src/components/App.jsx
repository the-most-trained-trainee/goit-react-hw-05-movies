import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
// const Home = lazy(() => import('./Home'));
import Movies from './Movies';
// const Movies = lazy(() => import('./Movies'));
import MovieDetails from './MovieDetails';
// const MovieDetails = lazy(() => import('./MovieDetails'));

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
