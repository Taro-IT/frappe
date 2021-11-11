import React from 'react';
import { AdminLayout } from '../layouts/AdminLayout';
import { ProtectedRoute } from '../HOC/ProtectedRoute';
import { Logo, withUserAgent } from '@frappe/common/design-system';


const Home = () => {

  return(
  <>
    <h1 className="col-end text-center align-middle text-4xl  ">Te damos la bienvenida al portal administrativo de Cínica.</h1>
    <div className="h-96"></div>
    <div className="h-36"></div>
    <Logo className="" link="/img/taro_png.png" alternative="logo-taro" width="15%"/>
  </>
  );
};

Home.Layout = AdminLayout;

export default withUserAgent (Home);
