import store from '@portal/store';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import '../boxicons/boxicons-2.1.2/css/boxicons.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
