export const required = (values) => {
  if (!values || values === '') {
    return 'Required';
  }
};

export const validate = (values) => {
  const errors = {};
  if (values.type === 'pizza') {
    if (!values.no_of_slices) {
      errors.no_of_slices = 'Required';
    }
    if (!values.diameter) {
      errors.diameter = 'Required';
    } else if (values.diameter < 32 || values.diameter > 50) {
      errors.diameter = 'Diameter must be between 32 to 50';
    }
  }
  if (values.type === 'soup') {
    if (!values.spiciness_scale) {
      errors.spiciness_scale = 'Required';
    } else if (values.spiciness_scale < 1 || values.spiciness_scale > 10) {
      errors.spiciness_scale = 'Spiciness must be between 1 to 10';
    }
  }
  if (values.type === 'sandwich') {
    if (!values.slices_of_bread) {
      errors.slices_of_bread = 'Required';
    }
  }
  return errors;
};

export const checkNameLength = (value) =>
  value && value.length < 4 ? 'Must be 4 characters or more' : undefined;

export const convertValues = (values) => {
  const converted = {};
  for (const key in values) {
    const parsed = parseFloat(values[key]);
    converted[key] = isNaN(values[key]) ? values[key] : parsed;
  }
  return converted;
};
