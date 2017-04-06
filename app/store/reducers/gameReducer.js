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
    let store;
    switch (action.type) {
        case 'START_GAME':
            console.log(state);
            store = state.set('gameInProgress', true);
            store = state.set('actualAge', Ages.age1);
            store = state.set('activePlayer', 1);
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
            return state.setIn(['gameDecks', 'age1'], Immutable.fromJS(action.payload));
        case 'FILL_DECK_AGE2':
            return state.setIn(['gameDecks', 'age2'], Immutable.fromJS(action.payload));
        case 'FILL_DECK_AGE3':
            return state.setIn(['gameDecks', 'age3'], Immutable.fromJS(action.payload));
        case 'DISCARD_CARD':
            return Object.assign({}, state, {
                discardDeck: [
                    ...state.discardDeck,
                    action.payload
                ]
            });
        case 'HIDE_CARD':
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    [state.actualAge]: Object.assign({}, state.gameDecks[state.actualAge], {
                        [action.payload.row]: [
                            ...state.gameDecks[state.actualAge][action.payload.row].slice(0, action.payload.col),
                            Object.assign({}, state.gameDecks[state.actualAge][action.payload.row][action.payload.col], {
                                hidden: true
                            }),
                            ...state.gameDecks[state.actualAge][action.payload.row].slice(action.payload.col + 1)
                        ]
                    })
                })
            });
        case 'LOCK_CARD':
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    [action.payload.age]: Object.assign({}, state.gameDecks[action.payload.age], {
                        [action.payload.row]: [
                            ...state.gameDecks[action.payload.age][action.payload.row].slice(0, action.payload.col),
                            Object.assign({}, state.gameDecks[action.payload.age][action.payload.row][action.payload.col], {
                                lock: action.payload.lock,
                                flip: action.payload.flip === undefined ? state.gameDecks[action.payload.age][action.payload.row][action.payload.col].flip : action.payload.flip
                            }),
                            ...state.gameDecks[action.payload.age][action.payload.row].slice(action.payload.col + 1)
                        ]
                    })
                })
            });
        default:
            return state
    }
}
