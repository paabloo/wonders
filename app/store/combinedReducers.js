import { combineReducers } from 'redux';
import playersReducer from './reducers/playersReducer';
import gameReducer from './reducers/gameReducer';
import deckCardsReducer from './reducers/usageElements/deckCards';

const combinedReducers = combineReducers({
    game: gameReducer,
    players: playersReducer,
    deckCards: deckCardsReducer,
});

export default combinedReducers;
