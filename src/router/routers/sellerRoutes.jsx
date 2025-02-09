import { lazy } from 'react';

const Home = lazy(() => import('../../views/seller/Home.jsx'));

export const sellerRoutes = [
  {
    path: '/',
    element: <Home />,
    ability: ['admin', 'seller'],
  },
];
