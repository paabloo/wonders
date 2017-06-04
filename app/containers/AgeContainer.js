import {connect} from 'react-redux';
import DeckDashboard from '../components/DeckDashboard';
import { buyCard, sellCard } from '../actions/gameActions';

const mapStateToProps = (state) => {
    const age = state.getIn(['game', 'actualAge']);
    return {
        state,
        age,
        players: state.get('players'),
        activePlayer: state.getIn(['game', 'activePlayer']),
        deckCards: state.getIn(['game', 'gameDecks', age])
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
