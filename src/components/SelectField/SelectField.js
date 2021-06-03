import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLabel, StyledError } from '../InputField/InputField.styles';
import { StyledSelect } from './SelectField.styles';

const SelectField = ({ input, label, children, meta: { touched, error } }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect {...input}>{children}</StyledSelect>
      {touched && error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
};

export default SelectField;
