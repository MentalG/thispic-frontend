import React from 'react';
import './styles.scss';

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(12));
}

const AddDot = (props) => {
  const { addDot, palitra, secondary } = props;
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
