import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ props, type, disabled, label }) => {
  return (
    <StyledButton {...props} type={type} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
