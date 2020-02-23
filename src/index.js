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
import AllyButton from './components/Allybutton'




ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AllyButton/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
