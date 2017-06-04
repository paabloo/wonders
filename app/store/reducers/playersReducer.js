import { fromJS } from 'immutable';

const initialState = fromJS({
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
    const { payload, type } = action;
    switch (type) {
        case 'UPDATE_GOLD':
            // TODO: avoid using toString method
            return state.updateIn([payload.player.toString(), 'gold'], gold => gold + payload.amount);
        default:
            return state
    }
}
