import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImagesData } from '../../store/selectors/images';
import { getAuthData } from '../../store/selectors/auth';
import { getColorsData } from '../../store/selectors/colors';
import { logout } from '../../store/actions/auth';
import { getToken } from '../../utils/localstorage';
import NoPicture from '../NoPicture'
import ModalWrap from '../ui-kit/ModalWrap';
import MenuButton from '../ui-kit/MenuButton';
import { mainStyle } from '../../utils/mockup/modalStyles';
import Upload from '../Upload';
import Sign from '../Sign';
import PictureWrap from '../ui-kit/PictureWrap';
import './styles.scss'

const Content = (props) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const [sign, setSign] = useState('');
  const { data } = useSelector(getImagesData);
  const { dominant, secondary } = useSelector(getColorsData);
  const secondaryReversed = [...secondary].reverse();
  const { token } = useSelector(getAuthData);
  const API_PREFIX = process.env.REACT_APP_API_PREFIX;
  const gradient = `linear-gradient(90deg, ${dominant} 50%, ${secondaryReversed.map(
    ({ color, id }) => `${color} ${100 - id * 10}%`
  )})`;
  document.body.style.background = gradient;
  let oppositeColor = '';

  switch (dominant) {
    case '#FFFFFF':
      oppositeColor = '#000000';
      break;

    case '#000000':
      oppositeColor = '#FFFFFF';

      break;
    default:
      oppositeColor = '#FFFFFF';
      break;
  }
  
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();

      if (token === 'undefined' || token === null) {
        setIsToken(false);
      } else {
        setIsToken(true);
      }
    };

    fetchToken();
  }, [token]);

  const authHandler = (sign) => {
    setModalOpen(true);
    setSign(sign);
  };

  const renderSign = () => {
    return (
      <>
        <MenuButton side='left' color={oppositeColor} background={dominant} action={() => authHandler('Sign Up')} title={'Sign Up'} />
        <MenuButton side='right' color={oppositeColor} background={dominant} action={() => authHandler('Sign In')} title={'Sign In'} />
      </>
    );
  };

  const renderLogged = () => {
    return (
      <>
      <MenuButton side='left' color={oppositeColor} background={dominant} action={() => setModalOpen(true)} title={'Upload'} />
      <MenuButton side='right' color={oppositeColor} background={dominant} action={() => dispatch(logout())} title={'Logout'} />
    </>
    );
  };

  const renderPictures = () => {
    return (
      data.map(({ imageUrl, name, hash }, key) => {
        const url = `${API_PREFIX}/${imageUrl}`;

        return (
          <PictureWrap
            className='picture_wrapper'
            key={key}
            onClick={() => window.open(`${API_PREFIX}/images/${hash}`)}>
            <img src={url} alt={name} />
          </PictureWrap>
        );
      })
    )
  }

  return (
    <div className='content_container'>
      {!!data.length ? renderPictures() : <NoPicture color={oppositeColor}/>}
      <div className='menu_container'>
        <div className='menu_wrapper'>
          {isToken ? renderLogged() : renderSign()}
        </div>
      </div>
      <ModalWrap isOpen={isModalOpen} style={mainStyle(dominant)} onRequestClose={() => setModalOpen(false)}>
        {isToken ? <Upload color={dominant} oppositeColor={oppositeColor}/> : <Sign sign={sign} setModalOpen={setModalOpen} />}
      </ModalWrap>
    </div>
  );
};

export default Content;
