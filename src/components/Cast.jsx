import { useState, useEffect } from 'react';
import { getMovieCast } from './movieDataBaseRequest';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(res => setCast(res));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
              <img className="movie-img" src={actor.profile_path} alt="" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
