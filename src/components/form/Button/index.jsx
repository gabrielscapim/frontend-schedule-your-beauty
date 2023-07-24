import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label,
  onClick,
  type,
  disabled,
}) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
