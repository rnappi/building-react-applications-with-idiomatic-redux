import { SET_VISIBILITY_FILTER } from '../actions/types';

export const setVisibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state;
    }
};