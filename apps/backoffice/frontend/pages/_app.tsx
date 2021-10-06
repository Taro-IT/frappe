import React from "react";
import { AppProps } from 'next/app';
import './styles.scss';

const CinicaApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
}

export default CinicaApp;
