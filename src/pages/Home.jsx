import MoviesItems from 'components/MoviesItems/MoviesItems';
import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const Home = () => {
  const [moviesName, setMoviesName] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const movies = api.fetchTrendingMovies();
    movies.then(movie => {
      setMoviesName(movie.results);
      setLoading(false);
    });
  }, []);

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
      <h1 style={{ margin: '10px' }}>Trending Today</h1>
      <ul className="movie-list">
        {moviesName.map(name => {
          return (
            <NavLink
              key={name.id}
              to={`/movies/${name.id}`}
              state={location}
              className="link-movie"
            >
              <MoviesItems
                id={name.id}
                poster_path={name.poster_path}
                tags={name.title}
                title={name.original_title}
              />
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
