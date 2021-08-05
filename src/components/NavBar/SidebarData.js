import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/reports',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'What We Do',
    path: '/products',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Fleets',
    path: '/team',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  // {
  //   title: '',
  //   path: '/messages',
  //   // icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Careers',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },

  {
    title: 'Contact Us',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];