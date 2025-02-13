import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);

  if (!userInfo.role) return <Navigate to={`/login`} replace />;
  if (!route.role) {
    if (route.ability === 'seller')
      return <Suspense fallback={null}>{children}</Suspense>;
  }
  if (!userInfo) return <Navigate to={`/unauthorized`} replace />;
  if (userInfo.role !== route.role) {
    if (route.visibility) {
      if (!route.visibility.some((r) => r === userInfo.status))
        return <Navigate to="/seller/account-pending" replace />;
      return <Suspense fallback={null}>{children}</Suspense>;
    }
  }
  if (route.status) {
    if (route.status !== userInfo.status) {
      if (userInfo.status !== 'pending') 
        return <Navigate to="/seller/account-deactive" replace />;
      return <Navigate to="/seller/account-pending" replace />;
    }
    return <Suspense fallback={null}>{children}</Suspense>;
  }

  
  return <Suspense fallback={null}>{children}</Suspense>;
};

export default ProtectRoute;
