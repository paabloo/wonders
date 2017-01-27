import {connect} from 'react-redux';
import DeckDashboard from '../components/DeckDashboard';

const mapStateToProps = (state) => {
    return {
        state,
        deckCards: state.game.gameDecks[state.game.actualAge]
    }
};

const AgeContainer = connect(
    mapStateToProps
)(DeckDashboard);

export default AgeContainer;
