import { prepareAgesDecks } from './gameActions';

export function newGame() {
    return (dispatch) => {
        dispatch(prepareAgesDecks());

        dispatch({type: 'START_GAME'});
    }
}
