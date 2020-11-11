import { createReducer } from '@reduxjs/toolkit';

import { registrationRequest, registrationSuccess, loginRequest, loginSuccess, logoutSuccess } from '../actions/auth';

const initialState = {
  token : '',
  isLoading : false,
  authNotification: {message : { primary: '', secondary: '' }, type: ''},
};

export default createReducer(initialState, {
  [registrationRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [registrationSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload;
  },
  [loginRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [loginSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
    state.authNotification.message = payload.message
    state.authNotification.type = 'success'
  },
  [logoutSuccess] : (state) => {
    state.token = ''
  }
});
