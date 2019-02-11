import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import throttle from 'lodash/throttle';

import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
    composeEnhancers()
);

// saves only the todos prop from state
store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000)); // saveState will not be call before the time defined on parameter

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);