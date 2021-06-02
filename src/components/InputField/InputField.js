import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ input, label, type, step, min, max, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>
        {label}
        <input {...input} placeholder={label} type={type} step={step} min={min} max={max} />
        {touched && error && <span>{error}</span>}
      </label>
    </div>
  );
};

InputField.propTypes = {};

export default InputField;
