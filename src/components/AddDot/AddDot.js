import React from 'react';
import './styles.scss';

const AddDot = (props) => {
  const { addDot } = props;

  return (
    <div className='addDot_container' onClick={() => addDot('#aa00ff')}>
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
