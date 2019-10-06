import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onRemove }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onRemove}>Remove</button>
    </li>
  )
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};

export default TechItem;