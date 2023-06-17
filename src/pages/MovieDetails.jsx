import HashLoader from 'react-spinners/HashLoader';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  fetchDetailsMovies,
  Card,
  CardDetailMovie,
  InfoCard,
  InfoItem,
  InfoList,
  CardButton,
  AdditionalInfo,
  CardLink,
  LinkBTN,
} from 'components';

const MovieDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const goBackLink = useRef(location.state);
  const [loading, setLoading] = useState(false);

  const detailsPromise = useMemo(() => {
    setLoading(true);
    try {
      return fetchDetailsMovies(params.id);
    } catch (error) {
      console.log(error);
      return;
    }
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

  return (
    <>
      <Card>
        <CardButton type="button">
          <LinkBTN to={goBackLink.current}>Go Back</LinkBTN>
        </CardButton>
        <CardDetailMovie details={details} />
      </Card>
      <InfoCard>
        <AdditionalInfo>Additional information</AdditionalInfo>
        <InfoList>
          <InfoItem>
            <CardLink to="cast">Cast</CardLink>
          </InfoItem>
          <InfoItem>
            <CardLink to="reviews">Reviews</CardLink>
          </InfoItem>
        </InfoList>
      </InfoCard>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
