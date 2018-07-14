import { checkDeckCardLock, checkAgeFinish } from './gameActions';

function getIndexesOfCard(deck, cardId) {
  let indexes = {};
  deck.forEach((row, row_index) => {
    row.forEach((card, card_index) => {
      if (card.get('id') === cardId) {
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
    const game = state().get('game');
    const deck = game.getIn(['gameDecks', game.get('actualAge')]);
    const age = game.get('actualAge');
    const { row, col, card } = getIndexesOfCard(deck, cardId);
    dispatch({type: 'UPDATE_GOLD', payload: {player: game.get('activePlayer'), amount: 2}});
    dispatch({type: 'DISCARD_CARD', payload: card});
    dispatch({type: 'HIDE_CARD', payload: {
      row,
      col,
      age
    }});
    dispatch(checkDeckCardLock(age));
    dispatch(checkAgeFinish());
    dispatch({type: 'SWITCH_PLAYER'});
  }
}

// TODO:
/*eslint-disable*/
export function buyCard(cardId) {
  return (dispatch, state) => {
    const game = state().get('game');
    const activePlayer = state().getIn(['players', game.get('activePlayer')]);
    const deck = game.getIn(['gameDecks', game.get('actualAge')]);
    const age = game.get('actualAge');
    const { row, col, card } = getIndexesOfCard(deck, cardId);
    card.get('cost').forEach((amount, supply) => {console.log(supply, amount)});
    debugger;
    return;
    console.log('Bought: ', card.toJS());
    dispatch({type: 'HIDE_CARD', payload: {
      row,
      col,
      age
    }});
    dispatch(checkDeckCardLock(age));
    dispatch(checkAgeFinish());
    dispatch({type: 'SWITCH_PLAYER'});
  }
}
