import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import { toast } from 'react-toastify';
import {
  MovieList,
  MovieNavLink,
  MoviesItems,
  Paginagion,
  SearchBarMovies,
  fetchSearchMovies,
  useCostomContext,
} from 'components';

const Movies = () => {
  const { movies, setMovies } = useCostomContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (searchParams.size === 0) {
      return;
    }
    const param = searchParams.get('query');

    setLoading(true);
    const responseMovies = fetchSearchMovies(searchParams, currentPage);
    responseMovies.then(movie => {
      setMovies(movie.results);
      setTotalPage(movie.total_pages);
      setLoading(false);
      if (movie.total_results === 0) {
        return toast.info(`Nothing was found for ${param}. Try something else`);
      }
    });
  }, [searchParams, setMovies, setLoading, movies.length, currentPage]);

  if (loading) {
    return (
      <HashLoader
        color="#ff4800"
        size={70}
        cssOverride={{ margin: '80px auto' }}
      />
    );
  }

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <>
      <SearchBarMovies
        setSearchParams={setSearchParams}
        setCurrentPage={setCurrentPage}
      />
      <MovieList>
        {movies &&
          movies.map(movie => {
            return (
              <MovieNavLink
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
              </MovieNavLink>
            );
          })}
      </MovieList>
      {movies.length !== 0 && (
        <Paginagion
          handlePageChange={handlePageChange}
          total={totalPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Movies;
