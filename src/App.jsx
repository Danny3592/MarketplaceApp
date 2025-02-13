import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routers/publicRoutes';
import { getRoutes } from './router/routers';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_info } from './store/Reducers/authReducer';

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]); //是否會變更為allRoute之類的，還是只有publicRoute會從這裡走(這裡是前台?)

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_info());
    }
  }, [token]);

  return <Router allRoutes={allRoutes}></Router>;
};

export default App;
