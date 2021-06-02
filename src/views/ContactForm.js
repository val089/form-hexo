import React from 'react';
import Form from 'components/Form/Form';

const ContactForm = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

export default ContactForm;
