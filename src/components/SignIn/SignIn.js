import React from 'react';
import './styles.scss';

const SignIn = (props) => {
  return (
    <div className='SignIn_container'>
      <span id='SignIn'>Sign In</span>
      <span id='SignIn_sub'>upload your own art</span>
      <form>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <div id='SignIn_button' onClick={() => console.log('click')}>
          <span>Sign In</span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
