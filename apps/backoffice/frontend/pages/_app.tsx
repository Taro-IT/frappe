import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to backoffice/frontend!</title>
      </Head>
      <div className="app">
        <header className="bg-red-400">
          <h1>Welcome to backoffice/frontend!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
