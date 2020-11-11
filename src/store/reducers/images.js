import { createReducer } from '@reduxjs/toolkit';

import { getImagesRequest, getImagesSuccess, setImageRequest, setImageSuccess, setImageFailure } from '../actions/images';

const initialState = {
    isLoadingImages: false,
    isUploadingImage: false,
    data: [],
    imagesNotification: {message : { primary: '', secondary: '' }, type: ''}
}

export default createReducer(initialState, {
    [getImagesRequest]: (state) => {
        state.isLoadingImages = true
    },
    [getImagesSuccess]: (state, { payload }) => {
        state.isLoadingImages = false
        state.data = [...payload]
    },
    [setImageRequest]: (state) => {
        state.isUploadingImage = true
    },
    [setImageSuccess]: (state, { payload }) => {
        state.isUploadingImage = false
        state.imagesNotification.message = payload.message
        state.imagesNotification.type = 'success'
    },
    [setImageFailure]: (state, { payload }) => {
        state.isUploadingImage = false
        state.imagesNotification.message = payload.message
        state.imagesNotification.type = 'error'
    },
})