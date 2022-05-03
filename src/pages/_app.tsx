import React from 'react';
import { AppProps } from 'next/app';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
