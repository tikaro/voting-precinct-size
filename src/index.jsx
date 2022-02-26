import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { ChakraProvider, Container, Stack } from '@chakra-ui/react'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Container>
        <Stack>
          <App />
        </Stack>
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
