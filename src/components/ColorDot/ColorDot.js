import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDominantColor, changeSecondaryColor } from '../../store/actions/colors'
import PropTypes from 'prop-types'
import './styles.scss';

const ColorDot = (props) => {
  const dispath = useDispatch();
  const { color, count, dataKey } = props;

  const clickHandle = color => {
    const params = {
      id: count,
      color
    }
    count === null ? dispath(changeDominantColor(color)) : dispath(changeSecondaryColor(params));
  }

  return (
    <div className='color' style={{background: color, animation: `appear ${0.2 * dataKey}s`}} onClick={() => clickHandle(color)}>
    </div>
  );
};

ColorDot.propTypes = { 
  count: PropTypes.any
}

ColorDot.defaultProps = {
  count: null
}

export default ColorDot;
