import React from 'react';
import { AppProps } from 'next/app';
import store from '@portal/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
