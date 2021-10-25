import React from 'react';
import { AppProps } from 'next/app';
import { AuthUserProvider } from '../context/AuthUserContext';

import './styles.scss';

const CinicaApp = ({ Component, pageProps }: AppProps) => (
  <AuthUserProvider>
    <Component {...pageProps} />
  </AuthUserProvider>
);

export default CinicaApp;
