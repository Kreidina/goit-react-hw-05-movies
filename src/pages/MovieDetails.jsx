import CardDetailMovie from 'components/CardDetailMovie/CardDetailMovie';
import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [id, setId] = useState('');
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const responseDetails = api.fetchDetailsMovies('343611');
    responseDetails.then(details => {
      setDetails(details);
    });
  }, [id]);
  return (
    <>
      <button type="button"> - Go Back</button>

      <CardDetailMovie details={details} />
    </>
  );
};

export default MovieDetails;
