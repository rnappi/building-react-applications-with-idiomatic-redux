import React from 'react';

import AddTodo from './AddTodo';
import Filter from './Filter';
import VisibleTodoList from './VisibleTodoList';

const App = ({ match }) => {
    return (
        <div className="ui container">
            <AddTodo />
            <Filter />
            <VisibleTodoList filter={match.params.filter || 'all'} />
        </div>
    );
};

export default App;