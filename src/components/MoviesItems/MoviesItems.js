import { NavLink } from 'react-router-dom';

import './MoviesItems.css';

const MoviesItems = ({ poster_path, tags, title }) => {
  return (
    <li className="movie-item">
      <NavLink to="/movieDetails" className="link-movie">
        <img
          className="img-movie"
          src={
            `https://image.tmdb.org/t/p/w500${poster_path}` ??
            'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
          }
          alt={tags}
        />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default MoviesItems;
