import { createReducer } from '@reduxjs/toolkit';

import { registrationRequest, registrationSuccess } from '../actions/auth';

const initialState = {
  token : '',
  isLoading : false
};

export default createReducer(initialState, {
  [registrationRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [registrationSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload;
  },
});
