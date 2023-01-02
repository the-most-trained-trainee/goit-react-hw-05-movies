import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByID } from './movieDataBaseRequest';

const MovieDetails = () => {
  const [movie, setMovie] = useState({ id: 'no-id', title: 'no-title' });
  const { movieId } = useParams();

  useEffect(() => {
    getMovieByID(movieId).then(res => setMovie(res));
  }, []);

  return (
    <div>
      <h1>Move Details Works</h1>
      <h3>ID: {movie.id} </h3>
      <h3>Title: {movie.title}</h3>
    </div>
  );
};

export default MovieDetails;
