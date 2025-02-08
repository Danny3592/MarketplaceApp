import { RiDashboard3Fill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';
import { FaCodiepie, FaUsers, FaUserTimes } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';


export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <RiDashboard3Fill />,
    role: 'admin',
    path: '/admin/dashboard',
  },
  {
    id: 2,
    title: 'Orders',
    icon: <AiOutlineShoppingCart />,
    role: 'admin',
    path: '/admin/dashboard/orders',
  },
  {
    id: 3,
    title: 'Category',
    icon: <BiSolidCategory />,
    role: 'admin',
    path: '/admin/dashboard/category',
  },
  {
    id: 4,
    title: 'Sellers',
    icon: <FaUsers />,
    role: 'admin',
    path: '/admin/dashboard/sellers',
  },
  {
    id: 5,
    title: 'Payment Request',
    icon: <MdPayment />,
    role: 'admin',
    path: '/admin/dashboard/payment-request',
  },
  {
    id: 6,
    title: 'Deactive Sellers',
    icon: <FaUserTimes />,
    role: 'admin',
    path: '/admin/dashboard/deactive-sellers',
  },
  {
    id: 7,
    title: 'Seller Request',
    icon: <FaCodiepie />,
    role: 'admin',
    path: '/admin/dashboard/sellers-request',
  },
  {
    id: 8,
    title: 'Live Chat',
    icon: <IoIosChatbubbles />,
    role: 'admin',
    path: '/admin/dashboard/chat-seller',
  },
  
];
