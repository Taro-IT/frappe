import { useAuth } from '../../context/AuthUserContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Noop } from "@frappe/common/design-system";

// eslint-disable-next-line react/display-name
// export const ProtectedRoute = BasePageComponent => props => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { user, loading } = useAuth();
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const router = useRouter();
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     if (!loading && !user) {
//       window.location.replace("/sign")
//     }
//   }, [loading, router, user]);

//   if (loading) {
//     return null;
//     // TODO Loading Component
//   }

//   return <BasePageComponent {...props} />;
// };

export const withProtectedRoute = WrappedComponent => {
  const ProtectedRoute = ({children , ...props}) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
        if (!loading && !user) {
          window.location.replace("/sign")
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
