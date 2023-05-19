import React, { useContext, useState } from 'react';

const ContextMovie = React.createContext();

export const useCostomContext = () => {
  return useContext(ContextMovie);
};

const Context = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState('');

  return (
    <ContextMovie.Provider
      value={{
        movies: movies,
        setMovies: setMovies,
        movieId: movieId,
        setMovieId: setMovieId,
      }}
    >
      {children}
    </ContextMovie.Provider>
  );
};
export default Context;
