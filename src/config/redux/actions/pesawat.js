import * as types from './types';


export const set_state = (value) => {
    return {
        type: types.SET_STATE,
        payload: value
    }
}