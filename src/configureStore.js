
import { createStore, compose } from 'redux';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
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

    return store;
};

export default configureStore;