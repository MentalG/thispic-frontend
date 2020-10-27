import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthData } from '../../store/selectors/auth';
import { registration } from '../../store/actions/auth'
import './styles.scss';

const SignUp = (props) => {
  const data = useSelector(getAuthData);
  const dispatch = useDispatch();

  console.log(data);

  const SignUpHandle = (e) => {
    const email = e.target.parentNode.elements[0].value
    const password = e.target.parentNode.elements[1].value

    dispatch(registration({email, password}));
  }

  return (
    <div className='SignUp_container'>
      <span id='SignUp'>Sign Up</span>
      <span id='SignUp_sub'>upload your own art</span>
      <form onSubmit={() => console.log()}>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <div id='SignUp_button' onClick={(e) => SignUpHandle(e)}>
          <span>Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
