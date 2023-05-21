import PropTypes from 'prop-types';
import './MoviesItems.css';

const MoviesItems = ({ id, poster_path, tags, title }) => {
  return (
    <li key={id} className="movie-item">
      <img
        loading="lazy"
        className="img-movie"
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
        }
        alt={tags}
      />
      <p className="img-title">{title}</p>
    </li>
  );
};

export default MoviesItems;

MoviesItems.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
};
