const initialState = {
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
};

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
