import PropTypes from 'prop-types';
import { MovieImg, MovieItem, MovieTitle } from './MoviesItems.styled';

export const MoviesItems = ({ id, poster_path, tags, title }) => {
  return (
    <MovieItem key={id}>
      <MovieImg
        loading="lazy"
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
        }
        alt={tags}
      />
      <MovieTitle>{title}</MovieTitle>
    </MovieItem>
  );
};

MoviesItems.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
};
