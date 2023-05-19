import MoviesItems from 'components/MoviesItems/MoviesItems';
import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const [moviesName, setMoviesName] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const movies = api.fetchTrendingMovies();
    movies.then(movie => {
      setMoviesName(movie.results);
    });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
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
