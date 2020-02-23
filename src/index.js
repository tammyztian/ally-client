import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ContactForm from './components/Contact-page'
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import './index.css';
import Contactpage from './components/Contact-page';
import UpdateContacts from './components/UpdateContacts-page';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Contactpage />
        </Router>
    </Provider>,
    document.getElementById('root')
);
