import { useParams } from 'react-router-dom';

const MovieDetails = ({ MovieDetails }) => {
  const { id } = useParams();

  const movie = MovieDetails(id);

  return (
    <div>
      <h3>ID: {movie.id}</h3>
      <h3>Title: {movie.title}</h3>
    </div>
  );
};

export default MovieDetails;
