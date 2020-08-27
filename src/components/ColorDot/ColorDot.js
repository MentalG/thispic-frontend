import React from 'react';
import './styles.scss';

const ColorDot = (props) => {
  const { color } = props;

  return (
    <div className='color' style={{background: color}}></div>
  );
};

export default ColorDot;
