import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { required, validate, checkNameLength } from 'helpers.js';
import { StyledForm, StyledSuccessSubmit, StyledErrorSubmit } from './Form.styles';
import InputField from 'components/InputField/InputField';
import SelectField from 'components/SelectField/SelectField';
import Button from 'components/Button/Button';

let Form = ({ handleSubmit, valid, dishTypeValue, successInfo, errorInfo }) => {
  return (
    <StyledForm onSubmit={handleSubmit} className="container">
      {successInfo && <StyledSuccessSubmit>Success</StyledSuccessSubmit>}
      {errorInfo && <StyledErrorSubmit>Error</StyledErrorSubmit>}
      <Field name="name" component={InputField} type="text" label="Dish name" validate={[required, checkNameLength]} />
      <Field name="preparation_time" component={InputField} type="time" label="Preparation time" step="1" validate={required} />
      <Field name="type" component={SelectField} label="Dish type" validate={required}>
        <option value="" />
        <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="sandwich">sandwich</option>
      </Field>
      {dishTypeValue === 'pizza' && (
        <>
          <Field name="no_of_slices" component={InputField} type="number" label="Number of slices" />
          <Field name="diameter" component={InputField} type="number" step="0.5" min="32" max="50" label="Diameter" />
        </>
      )}
      {dishTypeValue === 'soup' && (
        <>
          <Field name="spiciness_scale" component={InputField} type="number" min="1" max="10" label="Spiciness scale from 1 to 10" />
        </>
      )}
      {dishTypeValue === 'sandwich' && (
        <>
          <Field name="slices_of_bread" component={InputField} type="number" label="Slices of bread" />
        </>
      )}
      <Button type="submit" disabled={!valid} label="Submit" />
    </StyledForm>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  dishTypeValue: PropTypes.string,
};

Form = reduxForm({
  form: 'formHexo',
  validate,
})(Form);

const selector = formValueSelector('formHexo');
Form = connect((state) => {
  // const nameValue = selector(state, 'name');
  // const preparationTimeValue = selector(state, 'preparation_time');
  const dishTypeValue = selector(state, 'type');
  // const noOfSlicesValue = selector(state, 'no_of_slices');
  // const diameterValue = selector(state, 'diameter');
  // const spicinessScale = selector(state, 'spiciness_scale');
  // const slicesOfBread = selector(state, 'slices_of_bread');
  return {
    // nameValue,
    // preparationTimeValue,
    dishTypeValue,
    // noOfSlicesValue,
    // diameterValue,
    // spicinessScale,
    // slicesOfBread,
  };
})(Form);

export default Form;
