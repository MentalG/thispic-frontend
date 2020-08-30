import { createReducer } from '@reduxjs/toolkit';

import { getImagesRequest, getImagesSuccess } from '../actions/images';

const initialState = {
    isLoading: false,
    data: []
}

export default createReducer(initialState, {
    [getImagesRequest]: (state) => {
        state.isLoading = true
    },
    [getImagesSuccess]: (state, { payload }) => {
        state.isLoading = false
        state.data = [...payload]
    } 
})