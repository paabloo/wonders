import * as Ages from '../../constants/ages';
import { fromJS } from 'immutable';

const initialState = fromJS({
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
    const { payload, type } = action;
    switch (type) {
        case 'START_GAME':
            return state
                .set('gameInProgress', true)
                .set('actualAge', Ages.age2)
                .set('activePlayer', 1);
        case 'SWITCH_PLAYER':
            return state
                .update('activePlayer', player => player === 1 ? 2 : 1);
        case 'NEXT_AGE':
            return state
                .update('actualAge', age => age === 'age1' ? 'age2' : 'age3');
        case 'FILL_DECK_AGE1':
            return state
                .setIn(['gameDecks', 'age1'], payload);
        case 'FILL_DECK_AGE2':
            return state
                .setIn(['gameDecks', 'age2'], payload);
        case 'FILL_DECK_AGE3':
            return state
                .setIn(['gameDecks', 'age3'], payload);
        case 'DISCARD_CARD':
            return state
                .update('discardDeck', deck => deck.push(payload))
        case 'HIDE_CARD':
            return state
                .setIn(['gameDecks', payload.age, payload.row, payload.col, 'hidden'], true);
        case 'LOCK_CARD':
            return state
                .setIn(['gameDecks', payload.age, payload.row, payload.col, 'lock'], payload.lock)
                .updateIn(['gameDecks', payload.age, payload.row, payload.col, 'flip'], flip => payload.flip === undefined ? flip : payload.flip);
        default:
            return state
    }
}
