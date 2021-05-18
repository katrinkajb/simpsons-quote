import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <>
    <h2>Load a Random Simpsons Quote</h2>
    <button onClick={onClick}>Get a Quote</button>
  </>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
