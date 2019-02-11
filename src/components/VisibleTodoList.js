import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(state, match.params.filter || 'all')
})

export default withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));
