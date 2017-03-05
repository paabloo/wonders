import { hashHistory } from 'react-router';

export function prepareAgesDecks() {
    return (dispatch, state) => {
        let deckCardsA1 = state().deckCards.age1;
        let rowsA1 = [];
        deckCardsA1 = deckCardsA1.sort(function () {return 0.5 - Math.random()});
        deckCardsA1 = deckCardsA1.slice(0, 20);
        rowsA1[0] = deckCardsA1.slice(0, 2);
        rowsA1[1] = deckCardsA1.slice(2, 5).map(e => {e.flip = true; return e;});
        rowsA1[2] = deckCardsA1.slice(5, 9);
        rowsA1[3] = deckCardsA1.slice(9, 14).map(e => {e.flip = true; return e;});
        rowsA1[4] = deckCardsA1.slice(14, 20);
        dispatch({type: 'FILL_DECK_AGE1', payload: rowsA1});
        let deckCardsA2 = state().deckCards.age2;
        let rowsA2 = [];
        deckCardsA2 = deckCardsA2.sort(function () {return 0.5 - Math.random()});
        deckCardsA2 = deckCardsA2.slice(0, 20);
        rowsA2[0] = deckCardsA2.slice(0, 6);
        rowsA2[1] = deckCardsA2.slice(6, 11).map(e => {e.flip = true; return e;});
        rowsA2[2] = deckCardsA2.slice(11, 15);
        rowsA2[3] = deckCardsA2.slice(15, 18).map(e => {e.flip = true; return e;});
        rowsA2[4] = deckCardsA2.slice(18, 20);
        dispatch({type: 'FILL_DECK_AGE2', payload: rowsA2});
        let deckCardsA3 = state().deckCards.age3;
        let guildCards = state().deckCards.guilds;
        let rowsA3 = [];
        deckCardsA3 = deckCardsA3.sort(function () {return 0.5 - Math.random()});
        guildCards = guildCards.sort(function () {return 0.5 - Math.random()});
        deckCardsA3 = deckCardsA3.slice(0, 17);
        deckCardsA3 = deckCardsA3.concat(guildCards.slice(0, 3));
        deckCardsA3 = deckCardsA3.sort(function () {return 0.5 - Math.random()});
        rowsA3[0] = deckCardsA3.slice(0, 2);
        rowsA3[1] = deckCardsA3.slice(2, 5).map(e => {e.flip = true; return e;});
        rowsA3[2] = deckCardsA3.slice(5, 9);
        rowsA3[3] = deckCardsA3.slice(9, 11).map(e => {e.flip = true; return e;});
        rowsA3[3][2] = rowsA3[3][1];
        rowsA3[3][1] = {hidden: true};
        rowsA3[4] = deckCardsA3.slice(11, 15);
        rowsA3[5] = deckCardsA3.slice(15, 18).map(e => {e.flip = true; return e;});
        rowsA3[6] = deckCardsA3.slice(18, 20);
        dispatch({type: 'FILL_DECK_AGE3', payload: rowsA3});
        dispatch(checkDeckCardLock('age1'));
        dispatch(checkDeckCardLock('age2'));
        dispatch(checkDeckCardLock('age3'));
    }
}

export function checkDeckCardLock(age) {
    return (dispatch, state) => {
        const checkFunctions = {
            age1: () => {
                const deckCards = state().game.gameDecks.age1;
                deckCards.forEach((row, row_index) => {
                    row.forEach((card, card_index) => {
                        if ((deckCards[row_index + 1] === undefined) ||
                            (deckCards[row_index + 1][card_index].hidden === true
                            && deckCards[row_index + 1][card_index + 1].hidden === true)) {
                                dispatch({type: 'LOCK_CARD', payload: {
                                    age: 'age1',
                                    row: row_index,
                                    col: card_index,
                                    lock: false,
                                    flip: false
                                }});
                        } else {
                            dispatch({type: 'LOCK_CARD', payload: {
                                age: 'age1',
                                row: row_index,
                                col: card_index,
                                lock: true
                            }});
                        }
                    })
                });
            },
            age2: () => {
                const deckCards = state().game.gameDecks.age2;
                deckCards.forEach((row, row_index) => {
                    row.forEach((card, card_index) => {
                        let nextUndefined = deckCards[row_index + 1] === undefined;
                        let thisMinusOne = !nextUndefined ? deckCards[row_index + 1][card_index - 1] : undefined;
                        let thisEqual = !nextUndefined ? deckCards[row_index + 1][card_index] : undefined;
                        if ((nextUndefined) ||
                        (thisMinusOne === undefined && thisEqual.hidden === true) ||
                        (thisMinusOne && thisMinusOne.hidden === true && thisEqual === undefined) ||
                        (thisMinusOne && thisMinusOne.hidden === true && thisEqual.hidden === true)) {
                            dispatch({type: 'LOCK_CARD', payload: {
                                age: 'age2',
                                row: row_index,
                                col: card_index,
                                lock: false,
                                flip: false
                            }});
                        } else {
                            dispatch({type: 'LOCK_CARD', payload: {
                                age: 'age2',
                                row: row_index,
                                col: card_index,
                                lock: true
                            }});
                        }
                    });
                });
            },
            age3: () => {
                const deckCards = state().game.gameDecks.age3;
                deckCards.forEach((row, row_index) => {
                    row.forEach((card, card_index) => {
                        let nextUndefined = deckCards[row_index + 1] === undefined;
                        let thisMinusOne = !nextUndefined ? deckCards[row_index + 1][card_index - 1] : undefined;
                        let thisEqual = !nextUndefined ? deckCards[row_index + 1][card_index] : undefined;
                        let thisPlusOne = !nextUndefined ? deckCards[row_index + 1][card_index + 1] : undefined;
                        if (row_index > 3 || row_index === 2) {
                            if ((nextUndefined) ||
                                (thisMinusOne === undefined && thisEqual.hidden === true) ||
                                (thisMinusOne && thisMinusOne.hidden === true && thisEqual === undefined) ||
                                (thisMinusOne && thisMinusOne.hidden === true && thisEqual.hidden === true)) {
                                    dispatch({type: 'LOCK_CARD', payload: {
                                        age: 'age3',
                                        row: row_index,
                                        col: card_index,
                                        lock: false,
                                        flip: false
                                    }});
                            } else {
                                dispatch({type: 'LOCK_CARD', payload: {
                                    age: 'age3',
                                    row: row_index,
                                    col: card_index,
                                    lock: true
                                }});
                            }
                        } else if (row_index === 3 || row_index <= 1) {
                            if (thisEqual.hidden === true && thisPlusOne.hidden === true) {
                                dispatch({type: 'LOCK_CARD', payload: {
                                    age: 'age3',
                                    row: row_index,
                                    col: card_index,
                                    lock: false,
                                    flip: false
                                }});
                            } else {
                                dispatch({type: 'LOCK_CARD', payload: {
                                    age: 'age3',
                                    row: row_index,
                                    col: card_index,
                                    lock: true
                                }});
                            }
                        }
                    });
                });
            }
        }
        checkFunctions[age]();
    }
}

export function checkAgeFinish() {
    return (dispatch, state) => {
        let finishFlag = true;
        const { game } = state();
        const lastRow = game.gameDecks[game.actualAge][0];
        lastRow.forEach(e => {
            if (!e.hidden) {
                finishFlag = false;
            }
        });
        if (finishFlag) {
            if (game.actualAge === 'age3') {
                // TODO: implement reducer for this event
                dispatch({type: 'FINISH_GAME'});
                hashHistory.push('/summary');
            } else {
                dispatch({type: 'NEXT_AGE'});
            }
        }
    }
}

function getIndexesOfCard(deck, cardId) {
    let indexes = {};
    deck.forEach((row, row_index) => {
        row.forEach((card, card_index) => {
            if (card.id === cardId) {
                indexes = {
                    row: row_index,
                    col: card_index,
                    card
                }
            }
        });
    });
    return indexes;
}

export function sellCard(cardId) {
    return (dispatch, state) => {
        const { game } = state();
        const deck = game.gameDecks[game.actualAge];
        const { row, col, card } = getIndexesOfCard(deck, cardId);
        dispatch({type: 'UPDATE_GOLD', payload: {player: game.activePlayer, amount: 2}});
        dispatch({type: 'DISCARD_CARD', payload: card});
        dispatch({type: 'HIDE_CARD', payload: {
            row,
            col
        }});
        dispatch(checkDeckCardLock(game.actualAge));
        dispatch(checkAgeFinish());
        dispatch({type: 'SWITCH_PLAYER'});
    }
}

export function buyCard(cardId) {
    return (dispatch, state) => {
        const { game } = state();
        const deck = game.gameDecks[game.actualAge];
        const { row, col, card } = getIndexesOfCard(deck, cardId);
        console.log('Bought: ', card);
        dispatch({type: 'HIDE_CARD', payload: {
            row,
            col
        }});
        dispatch(checkDeckCardLock(game.actualAge));
        dispatch(checkAgeFinish());
        dispatch({type: 'SWITCH_PLAYER'});
    }
}
