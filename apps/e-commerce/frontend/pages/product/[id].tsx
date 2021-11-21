import React, { useEffect, useState } from 'react';
import { EcommerceLayout, ProductDetail, withUserAgent } from '@frappe/common/design-system';
import styles from '../../styles/store.module.scss';
import axios from 'axios';
import { ProductPrimitives } from '@frappe/product/domain';
import { useRouter } from "next/router"
//User Stories: frappe-62

const StorePage = () => {

    const { query } = useRouter();

  const [productInfo, setProductInfo] = useState<ProductPrimitives>();

  useEffect(() => {
      const getProduct = async (): Promise<void> => {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${query.id}`);
          //console.log(response.data.product.result);
          const data = response.data.product.result;
          if (data.length !== 0) {
              setProductInfo(data);
            }
        };
        getProduct();
    }, []);
  return (
      <div className={ styles.wrapper }>
        <div>
        {productInfo == undefined ? <p>Cargando</p> : (<ProductDetail product={productInfo}/>)}
        </div>
      </div>
  )
  }

StorePage.Layout = EcommerceLayout;

export default withUserAgent(StorePage);
