import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLabel, StyledInput, StyledError } from './InputField.styles';

const InputField = ({ input, label, type, step, min, max, meta: { touched, error } }) => {
  return (
    <Wrapper>
      <StyledLabel>
        {label}
        <StyledInput {...input} type={type} step={step} min={min} max={max} />
        {touched && error && <StyledError>{error}</StyledError>}
      </StyledLabel>
    </Wrapper>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  step: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};

export default InputField;
