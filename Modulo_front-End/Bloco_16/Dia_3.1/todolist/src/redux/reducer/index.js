import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

const rootReducers = combineReducers({todoReducers});

export default rootReducers;