import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import SignIn from './components/SignIn'
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <SignIn/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
