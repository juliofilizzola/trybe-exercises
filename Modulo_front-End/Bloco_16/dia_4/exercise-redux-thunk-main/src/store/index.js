// Importe o método applyMiddleware
import { createStore, applyMiddleWare } from 'redux';
// Importe o redux-thunk
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(rootReducer, applyMiddleWare(thunk));

export default store;
