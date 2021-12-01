import React, {useEffect} from 'react';
import { RegisterForm } from '@frappe/account/ui';
import { AdminLayout } from '../layouts/AdminLayout';
import { Card, withUserAgent } from '@frappe/common/design-system';
import  { withProtectedRoute }  from '../HOC/withProtectedRoute';


const RegisterPage = () => {

  
  useEffect(() => {
    if(localStorage.getItem("accountRole") != "ADMIN")
      window.location.replace("/")
  }, [])

  return ( 
    <div>
      <Card className="flex flex-col xl:w-1/4 lg:w-1/3 md:w-5/12 w-2/3 rounded-xl mx-auto" rounded={false}>
        <Card.Header title={'Crear una cuenta'}>
        </Card.Header>
        <RegisterForm />
        <Card.Footer>
        </Card.Footer>
      </Card>
    </div>
  )
};

RegisterPage.Layout = AdminLayout;

export default withProtectedRoute(withUserAgent(RegisterPage));
