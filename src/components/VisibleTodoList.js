import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(state.todos, match.params.filter || 'all')
})

export default withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));
