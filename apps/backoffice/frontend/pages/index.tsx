import React, { useEffect } from 'react';
import { AdminLayout } from '../layouts/AdminLayout';
import { Logo, withUserAgent } from '@frappe/common/design-system';
import { useAuth } from '../context/AuthUserContext';
import axios from 'axios'
import { withProtectedRoute } from '../HOC/withProtectedRoute';


const Home = () => {

  const user = useAuth();
  useEffect(() => {
    if(user.user)
    {
      user.user.getIdToken().then(res => {
        console.log(res)
        localStorage.setItem('authToken', res);
      });
      console.log(user.user)
      searchUser(user.user.uid);
    }
  }, [user])

  const searchUser = async (id) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      }
    );
      const data = response.data.user.result;
      if (data) {
        console.log(data)
        console.log("name: ", data.name);
        console.log("role", data.role)
        localStorage.setItem('accountName', data.name)
        localStorage.setItem('accountRole', data.role)
      }
  }
  
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

export default withProtectedRoute(withUserAgent(Home))