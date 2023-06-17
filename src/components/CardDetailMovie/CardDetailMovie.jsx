import PropTypes from 'prop-types';
import {
  CardContainer,
  CardText,
  Chip,
  GenerItem,
  GenerList,
  ImgCard,
  InfoContainer,
  MainTitle,
  SecondTitle,
} from './CardDetailMovie.styled';

export const CardDetailMovie = ({ details }) => {
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
        <CardContainer>
          <ImgCard
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
            }
            alt={original_title}
          />
          <InfoContainer>
            <MainTitle>
              {original_title}
              <Chip>({release_date && release_date.slice(0, 4)})</Chip>
            </MainTitle>
            <CardText>Rating: {vote_average?.toFixed(1)}</CardText>
            <SecondTitle>Overview</SecondTitle>
            <CardText>{overview}</CardText>
            <SecondTitle>Genres</SecondTitle>
            <GenerList>
              {genres?.map(genre => {
                return <GenerItem key={genre.id}>{genre.name}</GenerItem>;
              })}
            </GenerList>
          </InfoContainer>
        </CardContainer>
      )}
    </>
  );
};

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
