import { useState, useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getMovieByID } from './movieDataBaseRequest';

// back button https://www.youtube.com/watch?v=pSPXlJFn1Bw

const MovieDetails = () => {
  const [movie, setMovie] = useState({
    id: '',
    title: '',
    overview: '',
    release_date: '    ',
    genres: [],
    popularity: '    ',
    vote_average: 0,
    poster_path: '',
  });
  const { movieId } = useParams();

  useEffect(() => {
    getMovieByID(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <div>
      <button>Back</button>
      <div className="movieinfo-container">
        <img
          className="movie-img"
          src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
          alt=""
        />
        <div className="movieinfo">
          <h1>
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </h1>
          <p>User score: {Math.ceil(movie.vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(x => x.name + ' ')}</p>
          <Link to="reviews">reviews</Link>
          <span> </span>
          <Link to="cast">cast</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
