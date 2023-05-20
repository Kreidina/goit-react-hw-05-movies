import { useEffect, useState } from 'react';
import api from './services/apiMovie';
import { useParams } from 'react-router-dom';
import CastItem from './CastItem/CastItem';
import { HashLoader } from 'react-spinners';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const response = api.fetchCastMovies(params.id);
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
        <ul className="list">
          {cast.map(item => (
            <CastItem
              key={item.id}
              name={item.name}
              character={item.character}
              photo={item.profile_path}
            />
          ))}
        </ul>
      ) : (
        <p style={{ margin: '20px 0', padding: '0 40px', fontWeight: '700' }}>
          There is no information about the cast
        </p>
      )}
    </>
  );
};

export default Cast;
