import {connect} from 'react-redux';
import DeckDashboard from '../components/DeckDashboard';
import { buyCard, sellCard } from '../actions/gameActions';

const mapStateToProps = (state) => {
    return {
        state,
        players: state.players,
        activePlayer: state.game.activePlayer,
        age: state.game.actualAge,
        deckCards: state.game.gameDecks[state.game.actualAge]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleBuy: (id) => {
            dispatch(buyCard(id));
        },
        handleSell: (id) => {
            dispatch(sellCard(id));
        }
    }
}

const AgeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckDashboard);

export default AgeContainer;
