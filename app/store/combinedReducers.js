import combineReducers from './combineImmutable';
import playersReducer from './reducers/playersReducer';
import gameReducer from './reducers/gameReducer';
import deckCardsReducer from './reducers/usageElements/deckCards';

const reducersMap = {
    game: gameReducer,
    players: playersReducer,
    deckCards: deckCardsReducer,
}

export default combineReducers(reducersMap);
