import * as ages from '../../constants/ages';

const initialState = {
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
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'START_GAME':
            return Object.assign({}, state, {
                gameInProgress: true,
                actualAge: ages.age1,
                activePlayer: 1
            });
        case 'SWITCH_PLAYER':
            return Object.assign({}, state, {
                activePlayer: state.activePlayer === 1 ? 2 : 1
            });
        case 'FILL_DECK_AGE1':
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    age1: action.payload,
                })
            });
        case 'FILL_DECK_AGE2':
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    age2: action.payload,
                })
            });
        case 'FILL_DECK_AGE3':
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    age3: action.payload,
                })
            });
        case 'DISCARD_CARD':
            return Object.assign({}, state, {
                discardDeck: [
                    ...state.discardDeck,
                    action.payload
                ]
            });
        case 'HIDE_CARD':
            // WTF?!
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    [state.actualAge]: [
                        ...state.gameDecks[state.actualAge].slice(0, action.payload.row),
                        [
                            ...state.gameDecks[state.actualAge][action.payload.row].slice(0, action.payload.col),
                            Object.assign({}, state.gameDecks[state.actualAge][action.payload.row][action.payload.col], {
                                hidden: true
                            }),
                            ...state.gameDecks[state.actualAge][action.payload.row].slice(action.payload.col + 1)
                        ],
                        ...state.gameDecks[state.actualAge].slice(action.payload.row + 1)
                    ]
                })
            });
        case 'LOCK_CARD':
            // WTF2?!
            return Object.assign({}, state, {
                gameDecks: Object.assign({}, state.gameDecks, {
                    [action.payload.age]: [
                        ...state.gameDecks[action.payload.age].slice(0, action.payload.row),
                        [
                            ...state.gameDecks[action.payload.age][action.payload.row].slice(0, action.payload.col),
                            Object.assign({}, state.gameDecks[action.payload.age][action.payload.row][action.payload.col], {
                                lock: action.payload.lock,
                                flip: action.payload.flip === undefined ? state.gameDecks[action.payload.age][action.payload.row][action.payload.col].flip : action.payload.flip
                            }),
                            ...state.gameDecks[action.payload.age][action.payload.row].slice(action.payload.col + 1)
                        ],
                        ...state.gameDecks[action.payload.age].slice(action.payload.row + 1)
                    ]
                })
            });
        default:
            return state
    }
}
