import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    1: {
        name: 'player_one',
        gold: 7,
        supply: {}
    },
    2: {
        name: 'player_two',
        gold: 7,
        supply: {}
    }
});

export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_GOLD':
            return state.updateIn([action.payload.player, 'gold'], gold => gold + action.payload.amount);
        default:
            return state
    }
}
