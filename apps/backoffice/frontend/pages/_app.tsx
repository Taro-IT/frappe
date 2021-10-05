import React from "react";
import { AppProps } from 'next/app';
import { initAuth } from "../utils/initAuth";

import './styles.scss';

initAuth();

const CinicaApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default CinicaApp;
