import { connect } from 'react-redux';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
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

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.filter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
