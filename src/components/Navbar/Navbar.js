import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColorsData } from '../../store/selectors/colors';
import { addColor } from '../../store/actions/colors';
import Dot from '../Dot';
import AddDot from '../AddDot';
import './styles.scss';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { secondary, dominant } = useSelector(getColorsData);
  const secondaryReversed = [...secondary].reverse();
  const gradient = `linear-gradient(90deg, ${dominant} 50%, ${secondaryReversed.map(({color, id}) => `${color} ${100 - (id * 10)}%`)})` 

  const addDot = (color) => {
    dispatch(addColor(color));
  }

  return (
    <div className='navbar' style={{background: gradient}}>
      <div className='navbar_left'>
        <Dot type='dominant'/>
      </div>
      <div
        className='navbar_right'
        onMouseEnter={() => setIsAddOpen(true)}
        onMouseLeave={() => setIsAddOpen(false)}
      >
        <div className='dots_container'>
          {isAddOpen && secondary.length < 5 ? <AddDot addDot={addDot}/> : null}
          {secondaryReversed.map((item) => {
              const { color, id } = item;
              return <Dot type='secondary' color={color} key={id} count={id}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
