import { combineReducers } from 'redux';

import { todosReducer } from './todos';
import { setVisibilityFilterReducer } from './visibilityFilter';

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: setVisibilityFilterReducer
});