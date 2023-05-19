import { NavLink, useLocation } from 'react-router-dom';

import './MoviesItems.css';
import { useCostomContext } from 'components/Context/Context';

const MoviesItems = ({ id, poster_path, tags, title }) => {
  const { setMovieId } = useCostomContext();

  const location = useLocation();
  // console.log(id);
  const onClick = e => {
    if (e.target.nodeName !== 'P' && e.target.nodeName !== 'IMG') {
      return;
    }
    const id = e.target.closest('IMG').dataset.id;

    setMovieId(id);
  };
  return (
    <li className="movie-item" onClick={onClick}>
      <NavLink
        to="/movieDetails"
        state={{ from: location }}
        className="link-movie"
      >
        <img
          loading="lazy"
          data-id={id}
          className="img-movie"
          src={
            `https://image.tmdb.org/t/p/w500${poster_path}` ??
            'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
          }
          alt={tags}
        />
        <p>{title}</p>
      </NavLink>
    </li>
  );
};

export default MoviesItems;
