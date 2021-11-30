import { useRouter } from 'next/router';
import React from 'react';
import { ProtectedRoute } from '../../HOC/ProtectedRoute';

const CategoryDetailPage = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default ProtectedRoute(CategoryDetailPage);
