import React, { useEffect, useState } from 'react';
import { EcommerceLayout, ProductDetail, ProductDetailExample, withUserAgent } from '@frappe/common/design-system';
import styles from '../../styles/store.module.scss';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
//User Stories: frappe-62

const StorePage = () => {

  const [productInfo, setProductInfo] = useState<ProductPrimitives>();

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/5188b876-049a-4d75-b26b-7244b3100afc`);
      //console.log(response.data.product.result);
      const data = response.data.product.result;
      if (data.length !== 0) {
        setProductInfo(data);
      }
    };
    getProduct();
  }, []);

  console.log(productInfo);
  return (
      <div className={ styles.wrapper }>
        <div>
        {productInfo == undefined ? <p>Cargando</p> : (<ProductDetail product={productInfo}/>)}
        <ProductDetailExample />
        </div>
      </div>
  )
  }

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
