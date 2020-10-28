import React from 'react';
import { useDispatch } from 'react-redux';
import { registration, login } from '../../store/actions/auth';
import './styles.scss';

const Sign = (props) => {
  const dispatch = useDispatch();
  const { sign, setModalOpen } = props;

  const signHandle = (e) => {
    const email = e.elements[0].value;
    const password = e.elements[1].value;
    sign === 'Sign In' ? dispatch(login({ email, password }))  : dispatch(registration({ email, password }))

    setModalOpen(false);
  };

  return (
    <div className='Sign_container'>
      <span id='Sign'>{sign}</span>
      <span id='Sign_sub'>upload your own art</span>
      <form onKeyPress={(e) => {if(e.key === 'Enter') signHandle(e.currentTarget)}}>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <div id='Sign_button' onClick={(e) => signHandle(e.target.parentNode)}>
          <span>{sign}</span>
        </div>
      </form>
    </div>
  );
};

export default Sign;
