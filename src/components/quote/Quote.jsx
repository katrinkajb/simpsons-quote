import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>{quote}</figcaption>
  </figure>
);

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
