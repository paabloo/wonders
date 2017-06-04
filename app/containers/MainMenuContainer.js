import { connect } from 'react-redux';
import { newGame } from '../actions/mainMenuActions';
import MainMenu from '../components/MainMenu';

const mapStateToProps = (state) => {
    return {
        gameInProgress: state.getIn(['game', 'gameInProgress'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newGame: () => {
            dispatch(newGame());
        }
    }
};

const MainMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);

export default MainMenuContainer;
