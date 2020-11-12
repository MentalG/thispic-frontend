import React from 'react';
import './styles.scss';

const NoPicture = (props) => {
  const { color } = props;

  return (
    <div className='NoPicture_wrapper' style={{ color }}>
      There are no pictures yet.
    </div>
  );
};

export default NoPicture;
