import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import {
  fetchTrendingMovies,
  MovieList,
  MoviesItems,
  MovieNavLink,
  TerndingTitle,
  Paginagion,
} from 'components';

const Home = () => {
  const [moviesName, setMoviesName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const movies = fetchTrendingMovies(currentPage);
    movies.then(movie => {
      setMoviesName(movie.results);
      setTotalPage(movie.total_pages);
      setLoading(false);
    });
  }, [currentPage]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected + 1);
  };

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
      <TerndingTitle>Trending Today</TerndingTitle>
      <MovieList>
        {moviesName.map(name => {
          return (
            <MovieNavLink
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
            </MovieNavLink>
          );
        })}
      </MovieList>
      <Paginagion
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        total={totalPage}
      />
    </>
  );
};

export default Home;
