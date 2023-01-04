import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './movieDataBaseRequest';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
