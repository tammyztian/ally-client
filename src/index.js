import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
// import App from './components/app';
import store from './store';
import './index.css';
import Confirmation from './components/confirmation';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Confirmation />
        </Router>
    </Provider>,
    document.getElementById('root')
);
