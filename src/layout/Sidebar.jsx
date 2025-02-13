import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = ({ showSidebar, setShowSidebar }) => {


  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

 

  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNav(role);
    setAllNav([...navs]);
  }, [role]);
  function handleShowSidebar() {
    setShowSidebar((showSidebar) => {
      console.log(!showSidebar);
      return !showSidebar;
    });
  }

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 ${
          !showSidebar ? 'invisible' : 'visible'
        }`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? 'left-0' : '-left-[260px] lg:left-0'
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src="../../images/logo.png" alt="" />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul>
            {allNav.map((n, i) => {
              return (
                <li key={i}>
                  <Link
                    to={n.path}
                    className={`${
                      pathname === n.path
                        ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500'
                        : 'text-[#030811] font-bold duration-200'
                    } px-[12px] py-[9px] rounded-sm flex  justify-start items-center gap-[12px] hover:pl-4 transition-all`}
                  >
                    <span>{n.icon}</span>
                    <span>{n.title}</span>
                  </Link>
                </li>
              );
            })}

            <li>
              <button className="text-[#030811] font-bold duration-200px px-[12px] py-[9px] rounded-sm flex  justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <RiLogoutBoxLine />
                </span>
                <span>Log out </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
