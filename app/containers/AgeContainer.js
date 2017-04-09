import {connect} from 'react-redux';
import DeckDashboard from '../components/DeckDashboard';
import { buyCard, sellCard } from '../actions/gameActions';

const mapStateToProps = (state) => {
    const age = state.game.get('actualAge');
    return {
        state,
        players: state.players,
        activePlayer: state.game.get('activePlayer'),
        age,
        deckCards: state.game.getIn(['gameDecks', age])
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
