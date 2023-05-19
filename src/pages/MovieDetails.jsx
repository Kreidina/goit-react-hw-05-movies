import CardDetailMovie from 'components/CardDetailMovie/CardDetailMovie';
import { useCostomContext } from 'components/Context/Context';
import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useCostomContext();
  const [details, setDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const responseDetails = api.fetchDetailsMovies(movieId);
    responseDetails.then(details => {
      setDetails(details);
    });
  }, [movieId]);

  // console.log(details);

  return (
    <>
      <button type="button">
        <Link to={location.state.from}>- Go Back</Link>
      </button>
      <CardDetailMovie details={details} />
      <ul>
        <li>
          <Link to="cast" details={details}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" details={details}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
