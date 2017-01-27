import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './combinedReducers';
import api from '../config/api';

const store = createStore(
  combinedReducers,
  applyMiddleware(thunk.withExtraArgument(api))
);

export default store;
