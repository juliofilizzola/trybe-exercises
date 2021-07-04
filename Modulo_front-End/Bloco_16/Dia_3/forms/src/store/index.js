import { createStore, compose } from "redux";
import rootReducers from '../reducer';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootReducers, compose(extension));

export default store;
