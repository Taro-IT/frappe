import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import AddCategory from '../components/Demo/category/AddCategory'
import { useState } from 'react';
import CategoryList from '../components/Demo/category/CategoryList';

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps}/>
  );
}

export default CustomApp;
