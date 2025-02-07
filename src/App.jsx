import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routers/publicRoutes';

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  // console.log(allRoutes);

  return <Router allRoutes={allRoutes}></Router>;
};

export default App;
