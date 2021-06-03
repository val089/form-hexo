import React, { useState } from 'react';
import Form from 'components/Form/Form';
import { convertValues } from 'helpers.js';

const ContactForm = (props) => {
  const [successInfo, setSuccessInfo] = useState(false);
  const [errorInfo, setErrorInfo] = useState(false);

  const onSubmit = async (values, event) => {
    const converted = convertValues(values);
    await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(converted),
    })
      .then((response) => console.log(response))
      .catch((error) => setErrorInfo(true));
    // event.target.reset();
    setSuccessInfo(true);
  };

  return (
    <>
      {successInfo && <p>Success</p>}
      {errorInfo && <p>Error</p>}
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default ContactForm;
