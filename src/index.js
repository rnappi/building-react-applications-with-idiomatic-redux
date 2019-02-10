import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const todoApp = createStore(
    reducers,
    composeEnhancers()
);

ReactDOM.render(
    <Provider store={todoApp}>
        <App />
    </Provider>,
    document.querySelector('#root')
);