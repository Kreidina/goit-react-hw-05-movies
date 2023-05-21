import PropTypes from 'prop-types';

const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h2>Author: {author}</h2>
      <p style={{ margin: '15px 0' }}>{content}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
