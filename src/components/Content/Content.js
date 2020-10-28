import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImagesData } from '../../store/selectors/images';
import { getAuthData } from '../../store/selectors/auth';
import { logout } from '../../store/actions/auth'
import { getToken } from '../../utils/localstorage';
import Upload from '../Upload'
import Modal from 'react-modal';
import Sign from '../Sign';
import './styles.scss';

const modalStyles = {
  content: {
    top: '13%',
    left: '32%',
    width: 640,
    height: 640,
    borderRadius: 50,
    backgroundColor: '#AA00FF',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};

const Content = (props) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const [sign, setSign] = useState('');
  const { data } = useSelector(getImagesData);
  const { token } = useSelector(getAuthData);
  const API_PREFIX = process.env.REACT_APP_API_PREFIX;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();

      if (token === 'undefined' || token === null) {
        setIsToken(false)
      } else {
        setIsToken(true)
      }
    }

    fetchToken();
  },[token])

  const authHandler = (sign) => {
    setModalOpen(true);
    setSign(sign);
  };

  const renderSign = () => {
    return (
      <>
        <span
          style={{ borderRadius: '50px 0px 0px 0px' }}
          onClick={() => authHandler('Sign In')}
        >
          Sign In
        </span>
        <span
          style={{ borderRadius: '0px 50px 0px 0px' }}
          onClick={() => authHandler('Sign Up')}
        >
          Sign Up
        </span>
      </>
    );
  };

  const renderLogged = () => {
    return (
      <>
        <span
          style={{ borderRadius: '50px 0px 0px 0px' }}
          onClick={() => setModalOpen(true)}
        >
          Upload
        </span>
        <span
          style={{ borderRadius: '0px 50px 0px 0px' }}
          onClick={() => dispatch(logout())}
        >
          Logout
        </span>
      </>
    );
  };

  return (
    <div className='content_container'>
      {data?.map(({ imageUrl, name, hash }, key) => {
        const url = `${API_PREFIX}/${imageUrl}`;

        return (
          <div
            className='picture_container'
            key={key}
            onClick={() => window.open(`${API_PREFIX}/images/${hash}`)}
          >
            <img src={url} alt={name} />
          </div>
        );
      })}
      <div className='menu_container'>
        <div className='menu_wrapper'>
          {isToken ? renderLogged() : renderSign()}
        </div>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        style={modalStyles}
        contentLabel='Example Modal'
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalOpen(false)}
      >
        {isToken ? <Upload /> : <Sign sign={sign} setModalOpen={setModalOpen} />}
      </Modal>
    </div>
  );
};

export default Content;
