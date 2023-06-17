import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { CastItem, CastList, CastMessage } from './CastItem';
import { fetchCastMovies } from './services';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = fetchCastMovies(params.id);
    response.then(data => {
      setCast(data.cast);
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
      {cast.length !== 0 ? (
        <CastList>
          {cast.map(item => (
            <CastItem
              key={item.id}
              name={item.name}
              character={item.character}
              photo={item.profile_path}
            />
          ))}
        </CastList>
      ) : (
        <CastMessage>There is no information about the cast</CastMessage>
      )}
    </>
  );
};

export default Cast;
