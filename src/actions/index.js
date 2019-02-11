import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO
} from './types';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime(),
        text
    }
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: id
});