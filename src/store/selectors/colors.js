import { createSelector } from 'reselect'

export const getColors = state => state.colors.colors;

export const getColorsData = createSelector(
    getColors,
    colors => colors
)