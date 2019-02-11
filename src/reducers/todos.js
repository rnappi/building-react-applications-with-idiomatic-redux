import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id === action.payload) {
                return {
                    ...state,
                    completed: !state.completed
                };
            }
            return state;
        default:
            return state;
    }
};

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(todo => todoReducer(todo, action));
        default:
            return state;
    }
};
