import { createAction } from '@reduxjs/toolkit';

export const setDominantColor = createAction('colors/dominant/set');
export const addSecondaryColor = createAction('colors/secondary/add');

export function changeDominantColor(color) {
    return (dispatch) => {
        dispatch(setDominantColor(color))
    }
}

export function addColor(params) {
    return (dispatch) => {
        dispatch(addSecondaryColor(params))
    }
}