import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const AddTodo = ({ onButtonClick }) => {
    let input;

    return (
        <div className="ui action input">
            <input ref={node => { input = node; }} />
            <button className="ui button" onClick={() => { onButtonClick(input.value); input.value = ''; }}>Add Todo</button>
        </div >
    );
};

export default connect(
    null,
    { onButtonClick: addTodo }
)(AddTodo);