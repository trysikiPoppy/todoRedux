import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
);
