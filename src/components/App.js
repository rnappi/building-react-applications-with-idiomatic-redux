import React from 'react';

import AddTodo from './AddTodo';
import Filter from './Filter';
import VisibleTodoList from './VisibleTodoList';

const App = () => {
    return (
        <div className="ui container">
            <AddTodo />
            <Filter />
            <VisibleTodoList />
        </div>
    );
};

export default App;