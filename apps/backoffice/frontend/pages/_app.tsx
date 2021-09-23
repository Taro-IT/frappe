import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import AddCategory from '../components/Demo/category/AddCategory'
import { useState } from 'react';
import CategoryList from '../components/Demo/category/CategoryList';

function CustomApp({ Component, pageProps }: AppProps) {
  const [categoriesList, setCategoriesList] = useState([])
  const addCategoryHandler = (uName) => {
    setCategoriesList(prevCategoriesList => {
      return [...prevCategoriesList, {name: uName, id:Math.random().toString()}];
    })
  }

  return (
    <>
      <Head>
      </Head>
      <div className="bg-gray-200 w-full h-full absolute">
        <AddCategory onAddCategory={addCategoryHandler}/>
        <CategoryList categories={categoriesList}/>
      </div>
    </>
  );
}

export default CustomApp;
