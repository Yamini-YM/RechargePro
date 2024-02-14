// store.js

import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;
