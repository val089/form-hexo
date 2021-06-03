import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { convertValues } from 'helpers.js';
import { Wrapper } from './Root.styles';
import Form from 'components/Form/Form';

const OrderForm = () => {
  const [successInfo, setSuccessInfo] = useState(false);
  const [errorInfo, setErrorInfo] = useState(false);

  const onSubmit = async (values) => {
    const converted = convertValues(values);
    await fetch('https://cors-anywhere.herokuapp.com/https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(converted),
    })
      .then((response) => console.log(response))
      .catch((error) => setErrorInfo(true));
    setSuccessInfo(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Form onSubmit={onSubmit} successInfo={successInfo} errorInfo={errorInfo} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default OrderForm;
