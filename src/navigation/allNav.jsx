import { RiDashboard3Fill } from 'react-icons/ri';
import { AiOutlineDashboard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';
import { FaCodiepie, FaUsers, FaUserTimes } from 'react-icons/fa';
import { MdPayment, MdViewList } from 'react-icons/md';
import { IoIosChatbubbles, IoMdAdd } from 'react-icons/io';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FcCustomerSupport } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';

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
  {
    id: 9,
    title: 'Dashboard',
    icon: <AiOutlineDashboard />,
    role: 'seller',
    path: '/seller/dashboard',
  },
  {
    id: 10,
    title: 'Add Product',
    icon: <IoMdAdd />,
    role: 'seller',
    path: '/seller/dashboard/add-product',
  },
  {
    id: 11,
    title: 'All Product',
    icon: <MdViewList />,
    role: 'seller',
    path: '/seller/dashboard/products',
  },
  {
    id: 12,
    title: 'Discount Product',
    icon: <MdProductionQuantityLimits />,
    role: 'seller',
    path: '/seller/dashboard/discount-product',
  },
  {
    id: 13,
    title: 'Orders',
    icon: <BsCart3 />,
    role: 'seller',
    path: '/seller/dashboard/orders',
  },
  {
    id: 14,
    title: 'Payments',
    icon: <MdPayment />,
    role: 'seller',
    path: '/seller/dashboard/payments',
  },
  {
    id: 15,
    title: 'Chat-Customer',
    icon: <FcCustomerSupport />,
    role: 'seller',
    path: '/seller/dashboard/chat-customer',
  },
  {
    id: 16,
    title: 'Chat-Support',
    icon: <RiCustomerService2Fill />,
    role: 'seller',
    path: '/seller/dashboard/chat-support',
  },
  {
    id: 17,
    title: 'Profile',
    icon: <CgProfile />,
    role: 'seller',
    path: '/seller/dashboard/profile',
  },
];
