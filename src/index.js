import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import AllyButton from './components/AllyButton'

// import App from './components/app';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AllyButton />
        </Router>
    </Provider>,
    document.getElementById('root')
);
