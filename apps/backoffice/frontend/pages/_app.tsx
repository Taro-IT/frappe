import React from 'react';
import { AppProps } from 'next/app';
import './styles.scss';
import { initFirebaseAuth } from '../utils/initFirebaseAuth';

initFirebaseAuth()

const FrappeApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component { ...pageProps } />
  )
};

export default FrappeApp;
