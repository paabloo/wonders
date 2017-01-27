import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import routes from './config/routes.jsx';
import store  from './store/store';

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app')
);
