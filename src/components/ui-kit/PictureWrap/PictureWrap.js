import React from 'react';

const PictureWrap = (props) => {
    const { children } = props;

  return (
    <div  {...props}>
      {children}
    </div>
  );
};

export default PictureWrap;
