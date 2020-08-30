import { createSelector } from 'reselect'

export const getImages = state => state.images;

export const getImagesData = createSelector(
    getImages,
    images => images
)