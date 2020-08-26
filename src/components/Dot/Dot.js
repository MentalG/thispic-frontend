import React from 'react';
import PropTypes from 'prop-types'
import './styles.scss';

const Dot = (props) => {
  const { color } = props;

  return (
    <div className='dot_container'>
      <div className='dot_wrapper'>
        <div className='dot' style={{background: color}}></div>
      </div>
    </div>
  );
};

Dot.propTypes = {
    color: PropTypes.string
}

Dot.defaultProps = {
    color: "#aa00ff"
}

export default Dot;
