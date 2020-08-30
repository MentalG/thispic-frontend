import { createAction } from '@reduxjs/toolkit';
import api from '../../api-singleton';
import { dumpColors } from '../../utils/dumps';

export const getImagesRequest = createAction('R:images/get')
export const getImagesSuccess = createAction('S:images/get')

export function getImages(colors) {
    return async (dispatch) => {
        try {
            const response = await api.images.getImages(dumpColors(colors));
            console.dir(response);
        } catch (error) {
            console.log(error);
        }
    }
}