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
        <div className="col-md-6 col-md-offset-3">
            {props.gameInProgress ? <Link to="/game" className="btn btn-info btn-block">Wznów grę</Link> : null}
            <button className="btn btn-success btn-block" onClick={onNewGameClick}>Nowa gra</button>
        </div>
    );
};

MainMenu.propTypes = {
    newGame: PropTypes.func,
    gameInProgress: PropTypes.bool
};

export default MainMenu;
