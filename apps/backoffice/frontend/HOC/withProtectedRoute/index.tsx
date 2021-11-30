import { useAuth } from '../../context/AuthUserContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Noop } from "@frappe/common/design-system";

export const withProtectedRoute = WrappedComponent => {
  const ProtectedRoute = ({children , ...props}) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
        if (!loading && !user) {
          window.location.replace("/signin")
        }
      }, [loading, router, user]);
      if (loading) {
            return null;
            // TODO Loading Component
          }
    return (
      <WrappedComponent {...props}>
        {children}
      </WrappedComponent>
    );
  }
  ProtectedRoute.getInitialProps = async (context) => {
    const props = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(context)
    return {
      ...props
    }
  };
  ProtectedRoute.Layout = WrappedComponent.Layout ?? Noop;
  return ProtectedRoute
}
