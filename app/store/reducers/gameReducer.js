const initialState = {
    gameInProgress: false,
    activePlayer: null,
    actualAge: 'age1', // TODO: back to `null` value
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
                gameInProgress: true
            });
        case 'GENERATE_AGE1':
            return Object.assign({}, state, {
                gameDecks: {
                    age1: action.payload
                }
            });
        default:
            return state
    }
}
