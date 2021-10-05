import {useAuth} from "../../context/AuthUserContext";
import {useRouter} from "next/router";
import React, {FC, useEffect} from "react";

export const ProtectedRoute = (Component): FC => (props): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, loading } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, router, user]);


  if (loading) {
    return null;
    // TODO Loading Component
  }

  return (
    <Component { ...props } />
  )
}
