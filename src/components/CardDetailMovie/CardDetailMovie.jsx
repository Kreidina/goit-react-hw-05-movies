import PropTypes from 'prop-types';
import './CardDetailMovie.css';

const CardDetailMovie = ({ details }) => {
  const {
    original_title,
    poster_path,
    genres,
    release_date,
    overview,
    vote_average,
  } = details;
  if (!details) {
    return null;
  }
  return (
    <>
      {details && (
        <div className="container">
          <img
            className="card-img"
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
            }
            alt={original_title}
          />
          <div className="info-container">
            <h1 className="card-title">
              {original_title}
              <span className="yers">
                ({release_date && release_date.slice(0, 4)})
              </span>
            </h1>
            <p className="card-user">Rating: {vote_average?.toFixed(1)}</p>
            <h2 className="card-overview-title">Overview</h2>
            <p className="card-overview">{overview}</p>
            <h2 className="card-genres">Genres</h2>
            <ul className="genre-list">
              {genres?.map(genre => {
                return (
                  <li className="genre-item" key={genre.id}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetailMovie;

CardDetailMovie.propTypes = {
  details: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    release_date: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
  }).isRequired,
};
