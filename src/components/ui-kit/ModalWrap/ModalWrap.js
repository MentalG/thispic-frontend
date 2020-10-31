import React from 'react';
import Modal from 'react-modal';

const ModalWrap = (props) => {
    const { children } = props;

  return (
    <Modal ariaHideApp={false} shouldCloseOnOverlayClick={true} {...props}>
      {children}
    </Modal>
  );
};

export default ModalWrap;
