import { createReducer } from '@reduxjs/toolkit';

import { setDominantColor, addSecondaryColor } from '../actions/colors';

const initialState = {
  colors: {
    dominant: '#AA00FF',
    secondary: [
      {
        id: 0,
        color: '#00AAFF',
      },
    ],
    palitra: [
      '#FF0000',
      '#FFAA00',
      '#FFFF00',
      '#00FF00',
      '#00FFFF',
      '#00AAFF',
      '#AA00FF',
      '#FF00FF',
      '#FFFFFF',
      '#000000',
      '#999999',
      '#8B4513',
    ],
  },
};

export default createReducer(initialState, {
  [setDominantColor]: (state, payload) => {
    state.colors.dominant = payload;
  },
  [addSecondaryColor]: (state, { payload }) => {
    state.colors.secondary =  [...state.colors.secondary, payload];
  },
});
