import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getImagesData } from '../../store/selectors/images';
import Modal from 'react-modal';
import SignUp from '../SignUp'
import './styles.scss';

const modalStyles = {
  content : {
    top: '13%',
    left: '32%',
    width: 640,
    height: 640,
    borderRadius: 50,
    backgroundColor: '#AA00FF',
    border: 'none'
  },
  overlay : {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

const Content = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { data } = useSelector(getImagesData);
  const API_PREFIX = process.env.REACT_APP_API_PREFIX;

  return (
    <div className='content_container'>
      {data?.map(({ imageUrl, name, hash }, key) => {
        const url = `${API_PREFIX}/${imageUrl}`;

        return (
            <div className='picture_container' key={key} onClick={() => window.open(`${API_PREFIX}/images/${hash}`)}>
              <img src={url} alt={name} />
          </div>
        );
      })}
      <div className='logIn_container' onClick={() => setModalOpen(true)}>
        <span>Sign Up</span>
      </div>
        <Modal
          isOpen={isModalOpen}
          style={modalStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setModalOpen(false)}
        >
          <SignUp />
        </Modal>
    </div>
  );
};

export default Content;
