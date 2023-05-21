import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import api from './services/apiMovie';
import ReviewsItem from './ReviewsItem/ReviewsItem';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = api.fetchReviewsMovies(params.id);
    response.then(data => {
      setReviews(data.results);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return (
      <HashLoader
        color="#ff4800"
        size={50}
        cssOverride={{ margin: '80px auto' }}
      />
    );
  }

  return (
    <>
      {reviews.length !== 0 ? (
        <ul style={{ padding: '0 40px' }}>
          {reviews.map(review => (
            <ReviewsItem
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </ul>
      ) : (
        <p style={{ margin: '20px 20px ', fontWeight: '700' }}>
          There are no reviews
        </p>
      )}
    </>
  );
};

export default Reviews;
