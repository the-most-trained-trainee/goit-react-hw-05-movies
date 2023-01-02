import { useParams } from 'react-router-dom';
import { getMovieByID } from './movieDataBaseRequest';

const MovieDetails = () => {
  const { movieId } = useParams();

  const movie = getMovieByID(movieId);

  return (
    <div>
      <h1>Move Details Works</h1>
      <h3>ID: {movie.id}</h3>
      <h3>Title: {movie.title}</h3>
    </div>
  );
};

export default MovieDetails;
