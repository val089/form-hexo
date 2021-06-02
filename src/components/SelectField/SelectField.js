import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ input, label, children, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...input}>{children}</select>
      {touched && error && <span>{error}</span>}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
};

export default SelectField;
