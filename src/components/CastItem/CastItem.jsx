import PropTypes from 'prop-types';
import { CastCharacter, CastIMG, CastName, Item } from './CastItem.styled';

export const CastItem = ({ name, character, photo }) => {
  return (
    <Item>
      <CastIMG
        src={
          photo !== null
            ? `https://image.tmdb.org/t/p/w500${photo}`
            : 'https://gdr.one/simg/95x142/c9c9c9/fff?text=Avatar'
        }
        alt={name}
      />
      <CastName>{name}</CastName>
      <CastCharacter>Character: {character}</CastCharacter>
    </Item>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};
