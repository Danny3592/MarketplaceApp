import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loader, errorMessage, successMsg } = useSelector(
    (state) => state.auth,
  );

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  function handleInputValue(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    dispatch(admin_login(state));
  }

  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignitems: 'center',
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px text-[#ffffff] p-2]">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="http://localhost:5173/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                value={state.email}
                onChange={handleInputValue}
                type="text"
                placeholder="Eamil"
                id="email"
                name="email"
                required
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                value={state.password}
                onChange={handleInputValue}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>

            <button
              disabled={loader}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-2"
            >
              {loader ? (
                <PropagateLoader cssOverride={overrideStyle} color="#fff" />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
