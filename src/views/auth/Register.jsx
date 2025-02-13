import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { seller_register,messageClear } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';

const Register = () => {

  

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth,
  );
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleInputValue(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function submit(e) {
    e.preventDefault();
    console.log('dqwdqw');
    dispatch(seller_register(state));
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/');
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px text-[#ffffff] p-2]">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please Register yout account
          </p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                value={state.name}
                onChange={handleInputValue}
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                required
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>
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

            <div className="flex items-cener items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & treams
              </label>
            </div>
            <button
              disabled={loader}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-2"
            >
              {loader ? (
                <PropagateLoader cssOverride={overrideStyle} color="#fff" />
              ) : (
                'Sign Up'
              )}
            </button>

            <div className="flex item-center mb-3 gap-3 justify-center">
              <p>
                Already Have an account?
                <Link to="/login" className="font-bold ml-2">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-900 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-900 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
