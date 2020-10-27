import { createAction } from '@reduxjs/toolkit';
import { putInStorage, getFromStorage, updateStorage } from '../../utils/localstorage';
import { TOKEN } from '../../constans/storage'
import api from '../../api-singleton';

export const registrationRequest = createAction('R:create/post')
export const registrationSuccess = createAction('S:create/post')

export function registration(user) {
    return async (dispatch) => {
        try {
            dispatch(registrationRequest);
            const response = await api.auth.registration(user);
            const isToken = await getFromStorage(TOKEN);

            if (isToken === undefined) {
                updateStorage(TOKEN, response.token)
            } else {
                putInStorage(TOKEN, response.token)
            }

            dispatch(registrationSuccess(response.token));
        } catch (error) {
            console.log(error);
        }
    }
}