import React from 'react';
import Button from '../../components/button/button';
import './header.scss';

import logo from '../../assets/images/logo.png';

const menuItems = [
  { text: 'Home', url: '/' },
  { text: 'Project', url: '/project' },
  { text: 'Services', url: '/services' },
  { text: 'About', url: '/about' },
  { text: 'Blog', url: '/blog' },
  { text: 'Shop', url: '/shop' },
  { text: 'Contact', url: '/contact' },
];


const Header = () => {
  return (
    <div className='header'>
        <div className='container'> 
        <div className='logo'><img src={logo} alt='Logo'></img></div>
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.text}</a>
        </li>
        
      ))}
        <Button to="/signup" className="header__button">Sing Up</Button>
    </ul>

    </div>
    </div>
  );
};

export default Header;
