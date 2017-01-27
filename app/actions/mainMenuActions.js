export function newGame() {
    return (dispatch, state) => {
        // TODO: move this function to game actions
        let deckCards = state().deckCards.age1;
        let rows = [];
        deckCards = deckCards.sort(function () {return 0.5 - Math.random()});
        deckCards = deckCards.slice(0, 20);
        rows[0] = deckCards.slice(0, 2);
        rows[1] = deckCards.slice(2, 5);
        rows[2] = deckCards.slice(5, 9);
        rows[3] = deckCards.slice(9, 14);
        rows[4] = deckCards.slice(14, 20);
        dispatch({type: 'GENERATE_AGE1', payload: rows});
        dispatch({type: 'START_GAME'});
    }
}