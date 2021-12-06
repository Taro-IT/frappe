import { useRouter } from 'next/router';
import React from 'react';
import { withProtectedRoute } from '../../HOC/withProtectedRoute';

const CategoryDetailPage = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default withProtectedRoute(CategoryDetailPage);
