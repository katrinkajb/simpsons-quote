import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, image }) => (
  <>
    <img src={image} alt={character} />
    <figcaption>
      "{quote}" -- {character}
    </figcaption>
  </>
);

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
