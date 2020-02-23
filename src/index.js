import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import SignIn from './components/SignIn'
import {Provider} from 'react-redux';
<<<<<<< HEAD
import Password from './components/Password';
=======
>>>>>>> master
import App from './components/app';
import store from './store';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
<<<<<<< HEAD
            <Password />
=======
            <App/>
>>>>>>> master
        </Router>
    </Provider>,
    document.getElementById('root')
);
