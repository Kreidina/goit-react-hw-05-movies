import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { ReviewsItem, ReviewsList, ReviewsMessage } from './ReviewsItem';
import { fetchReviewsMovies } from './services';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = fetchReviewsMovies(params.id);
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
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsItem
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </ReviewsList>
      ) : (
        <ReviewsMessage>There are no reviews</ReviewsMessage>
      )}
    </>
  );
};

export default Reviews;
