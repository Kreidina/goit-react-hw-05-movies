import PropTypes from 'prop-types';
import './CastItem.css';

const CastItem = ({ name, character, photo }) => {
  return (
    <li>
      <img
        className="img"
        src={
          photo !== null
            ? `https://image.tmdb.org/t/p/w500${photo}`
            : 'https://gdr.one/simg/95x142/c9c9c9/fff?text=Avatar'
        }
        alt={name}
      />
      <p className="name">{name}</p>
      <p className="character">Character: {character}</p>
    </li>
  );
};

export default CastItem;

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};
