import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './services/apiMovie';
const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const response = api.fetchReviewsMovies(params.id);
    response.then(data => {
      setReviews(data.results);
    });
  }, [params.id]);
  return (
    <div>
      <ul style={{ padding: '0 40px' }}>
        {reviews.lengh > 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p style={{ margin: '15px 0' }}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p style={{ margin: '20px 0 ', fontWeight: '700' }}>
            There are no reviews
          </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
