import { lazy } from 'react';

const AdminDashboard = lazy(() =>
  import('../../views/admin/AdminDashboard.jsx'),
);
const Category = lazy(() => import('../../views/admin/Category.jsx'));
const Orders = lazy(() => import('../../views/admin/Orders.jsx'));
const Sellers = lazy(() => import('../../views/admin/Sellers.jsx'));
const PaymentRequest = lazy(() =>
  import('../../views/admin/PaymentRequest.jsx'),
);

export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <AdminDashboard />,
    role: 'admin',
  },
  {
    path: 'admin/dashboard/orders',
    element: <Orders />,
    role: 'admin',
  },
  {
    path: 'admin/dashboard/category',
    element: <Category />,
    role: 'admin',
  },
  {
    path: 'admin/dashboard/sellers',
    element: <Sellers />,
    role: 'admin',
  },
  {
    path: 'admin/dashboard/payment-request',
    element: <PaymentRequest />,
    role: 'admin',
  },
];
