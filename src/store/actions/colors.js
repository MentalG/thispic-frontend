import { createAction } from '@reduxjs/toolkit';

export const addSecondaryColor = createAction('colors/secondary/add');
export const setDominantColor = createAction('colors/dominant/set');
export const setSecondaryColor = createAction('colors/secondary/set');

export function addColor(params) {
    return (dispatch) => {
        dispatch(addSecondaryColor(params))
    }
}

export function changeDominantColor(color) {
    return (dispatch) => {
        dispatch(setDominantColor(color))
    }
}

export function changeSecondaryColor(params) {
    return (dispatch) => {
        dispatch(setSecondaryColor(params))
    }
}