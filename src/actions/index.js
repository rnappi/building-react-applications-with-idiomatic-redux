import {
    ADD_TODO,
    TOGGLE_TODO
} from './types';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime(),
        text
    }
});

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: { id }
    };
};