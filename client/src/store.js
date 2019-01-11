import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk]; // recommended to handle async logic (AJAX requests)

const store = createStore(() => [], {}, applyMiddleware({ ...middleware }));

export default store;
