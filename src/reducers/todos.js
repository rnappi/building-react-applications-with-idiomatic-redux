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
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return { ...state, [action.payload.id]: todoReducer(state[action.payload.id], action) };
        default:
            return state;
    }
};
export default todosReducer

export const getVisibleTodos = (state, filter) => {
    let todos = Object.values(state);
    switch (filter) {
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        case 'all':
        default:
            return todos;
    }
};