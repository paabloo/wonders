import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import store  from '../store/store';

import Home from '../components/home';
import AgeContainer from '../containers/AgeContainer';

function onGameEnter(nextState, replace) {
    if (!store.getState().game.gameInProgress) {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/game' component={AgeContainer} onEnter={onGameEnter}/>
    </Router>
);

export default routes;
