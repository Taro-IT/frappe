import React from 'react';
import { AppProps } from 'next/app';
import './styles.scss';
import { Noop, PageWithLayout } from '@frappe/common/design-system';

const FrappeEcommerce = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as PageWithLayout<typeof pageProps>).Layout ?? Noop;

  return (
    <Layout { ...pageProps }>
      <Component {...pageProps} />
    </Layout>
  );
}

export default FrappeEcommerce;
