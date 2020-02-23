import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Contactpage from './components/Contact-page';
import App from './components/app';
import store from './store';
import './index.css';
import Password from './components/Password';
import SignIn from './components/SignIn'



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <SignIn/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
