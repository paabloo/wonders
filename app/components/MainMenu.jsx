import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';

const MainMenu = (props) => {

    const onNewGameClick = () => {
        if (!props.gameInProgress || confirm('Aktualnie gra się toczy. Rozpocząć nową?')) {
            props.newGame();
            hashHistory.push('/game');
        }
    };

    return (
        <div className="btn-group-vertical">
            {props.gameInProgress ? <Link to="/game" className="btn btn-info">Wznów grę</Link> : null}
            <button className="btn btn-success" onClick={onNewGameClick}>Nowa gra</button>
        </div>
    );
};

MainMenu.propTypes = {
    newGame: PropTypes.func,
    gameInProgress: PropTypes.bool
};

export default MainMenu;
