import React from 'react';
import ColorDot from '../ColorDot';
import PropTypes from 'prop-types';
import './styles.scss';

const Dot = (props) => {
  const { color } = props;
  const subDotColors = [
    '#FF0000',
    '#FFAA00',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#00AAFF',
    '#AA00FF',
    '#FF00FF',
    '#FFFFFF',
    '#000000',
    '#999999',
    '#8B4513',
  ];

  return (
    <div className='dot_container'>
      <div className='colors_container'>
        <div className='colors_wrapper'>
          {subDotColors.map((subColor, index) => {
            return <ColorDot color={subColor} key={index}/>
          })}
        </div>
      </div>
      <div className='dot_wrapper'>
        <div className='dot' style={{ background: color }}></div>
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
