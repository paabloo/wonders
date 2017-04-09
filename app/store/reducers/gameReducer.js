import * as Ages from '../../constants/ages';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    gameInProgress: false,
    activePlayer: null,
    actualAge: null,
    militaryAdvantage: 0,
    gameDecks: {
        age1: [],
        age2: [],
        age3: []
    },
    discardDeck: []
});

export default function (state = initialState, action) {
    let store = state;
    switch (action.type) {
        case 'START_GAME':
            store = store.set('gameInProgress', true);
            store = store.set('actualAge', Ages.age1);
            store = store.set('activePlayer', 1);
            return store;
        case 'SWITCH_PLAYER':
            return Object.assign({}, state, {
                activePlayer: state.activePlayer === 1 ? 2 : 1
            });
        case 'NEXT_AGE':
            return Object.assign({}, state, {
                actualAge: state.actualAge === 'age1' ? 'age2' : 'age3'
            });
        case 'FILL_DECK_AGE1':
            return state.setIn(['gameDecks', 'age1'], action.payload);
        case 'FILL_DECK_AGE2':
            return state.setIn(['gameDecks', 'age2'], action.payload);
        case 'FILL_DECK_AGE3':
            return state.setIn(['gameDecks', 'age3'], action.payload);
        case 'DISCARD_CARD':
            return Object.assign({}, state, {
                discardDeck: [
                    ...state.discardDeck,
                    action.payload
                ]
            });
        case 'HIDE_CARD':
            store = store.setIn(['gameDecks', action.payload.age, action.payload.row, action.payload.col, 'hidden'], true);
            return store;
        case 'LOCK_CARD':
            store = store.setIn(['gameDecks', action.payload.age, action.payload.row, action.payload.col, 'lock'], action.payload.lock);
            store = store.updateIn(['gameDecks', action.payload.age, action.payload.row, action.payload.col, 'flip'], flip => action.payload.flip === undefined ? flip : action.payload.flip);
            return store;
        default:
            return state
    }
}
