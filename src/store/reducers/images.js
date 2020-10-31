import { createReducer } from '@reduxjs/toolkit';

import { getImagesRequest, getImagesSuccess, setImageRequest, setImageSuccess } from '../actions/images';

const initialState = {
    isLoadingImages: false,
    isUploadingImage: false,
    data: []
}

export default createReducer(initialState, {
    [getImagesRequest]: (state) => {
        state.isLoading = true
    },
    [getImagesSuccess]: (state, { payload }) => {
        state.isLoading = false
        state.data = [...payload]
    },
    [setImageRequest]: (state) => {
        state.isUploadingImage = true
    },
    [setImageSuccess]: (state, { payload }) => {
        state.isUploadingImage = false
    } 
})