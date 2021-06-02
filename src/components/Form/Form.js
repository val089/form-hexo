import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from 'components/InputField/InputField';
import SelectField from 'components/SelectField/SelectField';
import { required, validate, checkNameLength } from 'helpers.js';

let Form = ({ handleSubmit, valid }) => {
  return (
    <form onSubmit={handleSubmit} className="container">
      <Field
        name="name"
        component={InputField}
        type="text"
        label="Name"
        validate={[required, checkNameLength]}
      />
      <Field
        name="preparation_time"
        component={InputField}
        type="time"
        label="Preparation time"
        step="1"
        validate={required}
      />
      <Field name="type" component={SelectField} label="Dish type" validate={required}>
        <option value="" />
        <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="sandwich">sandwich</option>
      </Field>
      <div>
        <Field name="no_of_slices" component={InputField} type="number" label="Number of slices" />
        <Field
          name="diameter"
          component={InputField}
          type="number"
          step="0.5"
          min="32"
          max="50"
          label="Diameter"
        />
      </div>
      <div>
        <Field
          name="spiciness_scale"
          component={InputField}
          type="number"
          min="1"
          max="10"
          label="Spiciness scale from 1 to 10"
        />
      </div>
      <div>
        <Field
          name="slices_of_bread"
          component={InputField}
          type="number"
          label="Slices of bread"
        />
      </div>
      <button type="submit" disabled={!valid}>
        Submit
      </button>
    </form>
  );
};

Form = reduxForm({
  form: 'form-hexo',
  validate,
})(Form);

export default Form;
