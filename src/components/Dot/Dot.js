import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getColorsData } from '../../store/selectors/colors';
import PropTypes from 'prop-types';
import ColorDot from '../ColorDot';
import './styles.scss';

const Dot = (props) => {
  const [isPalitraActive, setIsPalitraActive] = useState(false);
  const { color, palitra, count } = props;
  const { dominant } = useSelector(getColorsData);
  let radiusColor = '';

  switch (dominant) {
    case '#FFFFFF':
      radiusColor = '#000000';
      break;

    case '#000000':
      radiusColor = '#FFFFFF';

      break;
    default:
      radiusColor = '#FFFFFF';
      break;
  }

  const renderColorsPalitra = () => {
    return (
      <>
        <div className='colors_container'>
          <div className='colors_wrapper'>
            {palitra.map((subColor, index) => {
              return (
                <ColorDot
                  color={subColor}
                  key={index}
                  count={count}
                  dataKey={index}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='dot_container'>
      {isPalitraActive ? renderColorsPalitra() : null}
      <div
        style={{background: radiusColor}}
        className='dot_wrapper'
        onClick={() => setIsPalitraActive(!isPalitraActive)}
      >
        <div className='dot' style={{ background: color }}></div>
      </div>
    </div>
  );
};

Dot.propTypes = {
  color: PropTypes.string,
  count: PropTypes.any,
};

Dot.defaultProps = {
  color: '#aa00ff',
  count: null,
};

export default Dot;
