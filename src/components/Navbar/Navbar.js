import React, { useState } from 'react';
import Dot from '../Dot';
import AddDot from '../AddDot';
import './styles.scss';

const Navbar = (props) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [subColors, setSubColors] = useState(['#aa00ff']);

  const addDot = (color) => {
      setSubColors((prevState) => [...prevState, color])
  }

  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <Dot />
      </div>
      <div
        className='navbar_right'
        onMouseEnter={() => setIsAddOpen(true)}
        onMouseLeave={() => setIsAddOpen(false)}
      >
        <div className='dots_container'>
          {isAddOpen && subColors.length < 5 ? <AddDot addDot={addDot}/> : null}
          {subColors.map((color, index) => {
              return <Dot color={color} key={index}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
