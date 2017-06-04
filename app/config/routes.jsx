import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import store  from '../store/store';

import Home from '../components/Home';
import AgeContainer from '../containers/AgeContainer';

window.store = store;

function onGameEnter(nextState, replace) {
    console.log(store);
    const inProgress = store.getState().getIn(['game', 'gameInProgress']);
    if (!inProgress) {
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
