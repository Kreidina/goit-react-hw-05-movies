import CardDetailMovie from 'components/CardDetailMovie/CardDetailMovie';

import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  // const path = location.pathname.split('/')[1];
  // console.log(path);
  useEffect(() => {
    const responseDetails = api.fetchDetailsMovies(params.id);
    responseDetails.then(details => {
      setDetails(details);
    });
  }, [params]);

  return (
    <>
      <div className="container-details" style={{ padding: '0 20px' }}>
        <button
          type="button"
          style={{
            padding: '4px',
            borderRadius: '3px',
            backgroundColor: '#fff',
            border: 'none',
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 3px',
            margin: '20px 15px 0',
          }}
        >
          <Link
            to={
              location.state
              // || `/${path}`
            }
            style={{ textDecoration: 'none' }}
          >
            - Go Back
          </Link>
          {/* чорновий варіант */}
        </button>

        <CardDetailMovie details={details} />
      </div>
      <div
        style={{
          borderTop: ' 2px solid rgba(0, 0, 0, 0.35) ',
          margin: 0,
          padding: '15px 20px',
        }}
      >
        <p>Additional information</p>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ margin: '10px' }}>
            <Link to="cast">Cast</Link>
          </li>
          <li style={{ margin: '10px' }}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;