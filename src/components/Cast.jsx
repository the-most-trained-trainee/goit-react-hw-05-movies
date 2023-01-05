import { useState, useEffect } from 'react';
import { getMovieCast } from './movieDataBaseRequest';
import { useParams } from 'react-router-dom';

const castAdapation = input => {
  return input.map(
    actor =>
      new Object({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path,
      })
  );
};

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(res => setCast(castAdapation(res.cast)));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(actor => (
          <li key={actor.id}>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
            <img
              className="movie-img"
              src={'https://image.tmdb.org/t/p/w300' + actor.profile_path}
              alt=""
            />
          </li>
        ))}
    </ul>
  );
};

export default Cast;
