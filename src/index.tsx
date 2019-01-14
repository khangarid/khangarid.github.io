import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import configureStore from './configureStore';
import Main from './main';
import * as serviceWorker from './serviceWorker';
import { fetchRequest } from './store/projects/actions';

ReactGA.initialize('UA-132428180-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const initialState = window.initialReduxState;
const store = configureStore(initialState);

store.dispatch(fetchRequest());

ReactDOM.render(<Main store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
