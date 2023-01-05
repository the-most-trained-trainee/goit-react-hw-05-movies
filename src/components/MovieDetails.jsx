import { useState, useEffect, Suspense } from 'react';
import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieByID } from './movieDataBaseRequest';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(`${location.state.from}`);

  useEffect(() => {
    getMovieByID(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  return (
    <div>
      <button onClick={goBack}> Back</button>
      {movie && (
        <div className="movieinfo-container">
          <img
            className="movie-img"
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt=""
          />
          <div className="movieinfo">
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <p>User score: {Math.ceil(movie.vote_average * 10)} %</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(x => x.name + ' ')}</p>
            <Link to="reviews" state={{ from: `${location.state.from}` }}>
              reviews
            </Link>
            <span> </span>
            <Link to="cast" state={{ from: `${location.state.from}` }}>
              cast
            </Link>
          </div>
        </div>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
