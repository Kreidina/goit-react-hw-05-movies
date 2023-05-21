import SearchBarMovies from 'components/SearchBarMovies/SearchBarMovies';
import { useEffect, useState } from 'react';
import api from '../components/services/apiMovie';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import { useCostomContext } from 'components/Context/Context';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import { toast } from 'react-toastify';

const Movies = () => {
  const { movies, setMovies } = useCostomContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.size === 0) {
      return;
    }
    const param = searchParams.get('query');

    setLoading(true);
    const responseMovies = api.fetchSearchMovies(searchParams);
    responseMovies.then(movie => {
      setMovies(movie.results);
      setLoading(false);

      if (movie.total_results === 0) {
        return toast.info(`Nothing was found for ${param}. Try something else`);
      }
    });
  }, [searchParams, setMovies, setLoading, movies.length]);

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
