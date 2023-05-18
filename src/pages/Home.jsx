import MoviesItems from 'components/MoviesItems/MoviesItems';
import api from 'components/services/apiMovie';
import { useEffect, useState } from 'react';

const Home = () => {
  const [moviesName, setMoviesName] = useState([]);

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
            <MoviesItems
              key={name.id}
              poster_path={name.poster_path}
              tags={name.title}
              title={name.original_title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Home;
