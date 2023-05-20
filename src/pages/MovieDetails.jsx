import CardDetailMovie from 'components/CardDetailMovie/CardDetailMovie';
import HashLoader from 'react-spinners/HashLoader';
import api from 'components/services/apiMovie';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const goBackLink = useRef(location.state);
  const [loading, setLoading] = useState(false);

  const detailsPromise = useMemo(() => {
    setLoading(true);
    return api.fetchDetailsMovies(params.id);
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    detailsPromise.then(details => {
      setLoading(false);
      setDetails(details);
    });
  }, [detailsPromise]);

  if (loading) {
    return (
      <HashLoader
        color="#ff4800"
        size={70}
        cssOverride={{ margin: '80px auto' }}
      />
    );
  }

  const chek = Object.keys(details).length < 25;
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
          <Link to={goBackLink.current} style={{ textDecoration: 'none' }}>
            Go Back
          </Link>
        </button>

        {!chek && (
          <>
            <CardDetailMovie details={details} />
          </>
        )}
      </div>
      {!chek && (
        <div
          style={{
            border: ' 2px solid rgba(0, 0, 0, 0.35) ',
            margin: '10px 0',
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
      )}

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
