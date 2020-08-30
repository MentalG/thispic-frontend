import { createAction } from '@reduxjs/toolkit';
import api from '../../api-singleton';

export const getImagesRequest = createAction('R:images/get')
export const getImagesSuccess = createAction('S:images/get')

export function getImages(colors) {
    return async (dispatch) => {
        try {
            console.log(colors);
            const response = await api.images.getImages();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
}