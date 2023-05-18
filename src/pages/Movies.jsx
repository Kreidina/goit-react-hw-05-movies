import SearchBarMovies from 'components/SearchBarMovies/SearchBarMovies';
import { useEffect, useState } from 'react';
import api from '../components/services/apiMovie';
import MoviesItems from 'components/MoviesItems/MoviesItems';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const responseMovies = api.fetchSearchMovies(query);
    responseMovies.then(movie => {
      setMovies(movie.results);
    });
  }, [query]);

  const onSubmit = search => {
    setQuery(search);
  };

  return (
    <>
      <SearchBarMovies onSubmit={onSubmit} />
      <ul className="movie-list">
        {movies.map(movie => {
          return (
            <MoviesItems
              key={movie.id}
              poster_path={movie.poster_path}
              tags={movie.title}
              title={movie.original_title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
