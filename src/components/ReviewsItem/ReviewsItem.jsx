import PropTypes from 'prop-types';
import { Item, ReviewsMessage, ReviewsTitle } from '.';

export const ReviewsItem = ({ author, content }) => {
  return (
    <Item>
      <ReviewsTitle>Author: {author}</ReviewsTitle>
      <ReviewsMessage>{content}</ReviewsMessage>
    </Item>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
