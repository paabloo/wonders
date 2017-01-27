import { combineReducers } from 'redux';
import dummyReducer from './reducers/dummyReducer';

const combinedReducers = combineReducers({
  dummy: dummyReducer,
});

export default combinedReducers;
