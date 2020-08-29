import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ColorDot from '../ColorDot';
import { getColorsData } from '../../store/selectors/colors';
import './styles.scss';

const Dot = (props) => {
  const { type, count } = props;
  const data = useSelector(getColorsData);
  const { dominant, secondary, palitra } = data;
  const dotColor = type === 'dominant' ? dominant : secondary[count].color;

  return (
    <div className='dot_container'>
      <div className='colors_container'>
        <div className='colors_wrapper'>
          {palitra.map((subColor, index) => {
            return (
              <ColorDot color={subColor} key={index}/>
            );
          })}
        </div>
      </div>
      <div className='dot_wrapper'>
        <div className='dot' style={{ background: dotColor }}></div>
      </div>
    </div>
  );
};

Dot.propTypes = {
  color: PropTypes.string,
};

Dot.defaultProps = {
  color: '#aa00ff',
};

export default Dot;
