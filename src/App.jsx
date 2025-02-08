import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routers/publicRoutes';
import { getRoutes } from './router/routers';

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]); //是否會變更為allRoute之類的，還是只有publicRoute會從這裡走(這裡是前台?)

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes}></Router>;
};

export default App;
