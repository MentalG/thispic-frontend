import React from 'react';
import Dot from '../Dot';
import './styles.scss';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <Dot />
      </div>
      <div className='navbar_right'>
        <div className='dots_container'>
        <Dot />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
