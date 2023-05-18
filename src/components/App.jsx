import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Layout from './Layout/Layout';
// import { useEffect } from 'react';
// import api from '../components/services/apiMovie';

export const App = () => {
  // useEffect(() => {
  //   const movies = api.fetchTrendingMovies();
  //   // console.log(movies);
  //   movies.then(movie => console.log(movie));
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};
