import React from 'react';
import PropTypes from 'prop-types';
import ColorDot from '../ColorDot';
import './styles.scss';

const Dot = (props) => {
  const { color, palitra } = props;

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
