import { combineReducers } from 'redux';

import todosReducer, * as fromTodosReducer from './todos';

export default combineReducers({
    todos: todosReducer
});

export const getVisibleTodos = (state, filter) =>
    fromTodosReducer.getVisibleTodos(state.todos, filter)