import React from 'react';
import { useSelector } from 'react-redux';
import { getColorsData } from '../../store/selectors/colors';
import './styles.scss';

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(12));
}

const AddDot = (props) => {
  const { addDot } = props;
  const { palitra, secondary } = useSelector(getColorsData);
  const params = {
    id: secondary.length,
    color: palitra[getRandomNumber()]
  }

  return (
    <div className='addDot_container' onClick={() => addDot(params)}>
      <div className='addDot_wrapper'>
        <div className='addDot'>
          <div className='plus'>
            <div className='plus_vertical'></div>
            <div className='plus_horizontal'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDot;
