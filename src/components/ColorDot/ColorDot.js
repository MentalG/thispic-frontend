import React from 'react';
import './styles.scss';

const ColorDot = (props) => {
  const { color } = props;

  const clickHandle = color => {
    console.log(color);
  }

  return (
    <div className='color' style={{background: color}} onClick={() => clickHandle(color)}></div>
  );
};

export default ColorDot;
