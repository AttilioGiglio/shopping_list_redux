import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'

const Store = () => createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' 
        &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__()  : f => f
    )
);

export default Store;
