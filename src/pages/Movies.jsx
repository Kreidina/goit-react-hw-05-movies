import SearchBarMovies from 'components/SearchBarMovies/SearchBarMovies';
import { useEffect } from 'react';
import api from '../components/services/apiMovie';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import { useCostomContext } from 'components/Context/Context';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const { movies, setMovies } = useCostomContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (searchParams === '') {
      return;
    }
    const responseMovies = api.fetchSearchMovies(searchParams);
    responseMovies.then(movie => {
      setMovies(movie.results);
    });
  }, [searchParams, setMovies]);

  return (
    <>
      <SearchBarMovies setSearchParams={setSearchParams} />
      <ul className="movie-list">
        {movies &&
          movies.map(movie => {
            return (
              <NavLink
                key={movie.id}
                to={`${movie.id}`}
                state={location}
                className="link-movie"
              >
                <MoviesItems
                  key={movie.id}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  tags={movie.title}
                  title={movie.original_title}
                />
              </NavLink>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
