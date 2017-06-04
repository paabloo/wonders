import { fromJS } from 'immutable';

/**
 * Combines immutable reducers
 *
 * This utility should work similar to redux's combine reducers,
 * except it is designed to work with immutable-js data structures
 *
 * Usage:
 * combineReducers({
 *   first: firstReducer,
 *   second: secondReducer,
 * })
 * Result:
 * Combined reducer that applies first reducer for the first key in state
 * and second reducer for the second key in state
 *
 * @param {Object} reducersMap collection of keys and reducers
 * @return {Function} combined reducer
 */
export default function combineReducers(reducersMap) {
  const applyReducer = (reducer, action) => subState => reducersMap[reducer](subState, action);

  return (state = fromJS({}), action) => {
    for (let key in reducersMap) {
      state = state.update(key, applyReducer(key, action));
    }
    return state;
  };
}
