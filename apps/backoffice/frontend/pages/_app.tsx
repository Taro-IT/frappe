import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { AuthUserProvider } from "../context/AuthUserContext";
import './styles.scss';
import { Noop } from '../layouts/Noop';
import { NextComponentType } from 'next';

const CinicaApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as NextComponentType & {Layout?: FC<{userAgent: string}>}).Layout ?? Noop
  
  return (
    
    <AuthUserProvider>
      <Layout userAgent={pageProps.userAgent}>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  )
};

export default CinicaApp;
