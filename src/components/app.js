import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
// import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import { AllyLandingPage } from './AllyLandingPage';
import AddContact from './AddContact';
import registrationForm from './registration-form';
import registrationPage from './registration-page';
import Allybutton from './Allybutton';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: "false",
            user: {
                firstName: "Ally",
                lastName: "Alison",
                phoneNumber: "14142485586",
                contacts: []
            }
    
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

      }


    

    handleLogin(e){
        e.preventDefault()
          this.setState({loggedIn: true});
    }

    handleLogout(e){
        this.setState({loggedIn: false});
  }

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar 
                    handleLogout={this.handleLogout}
                />
                <Route exact path="/" 
                        render={(props) => <AllyLandingPage {...props}  loggedIn={false}  user={this.state.user} handleLogin={this.handleLogin}
                        />
                    }
                />
                <Route exact path="/dashboard" 
                    component={Allybutton} 
                    loggedIn={this.state.loggedIn} 
                    user={this.state.user}
                />
                <Route exact path="/register" 
                    component={registrationPage} 
                    loggedIn={this.state.loggedIn} 
                    user={this.state.user}
                    handleLogin={this.handleLogin}
                />
                <Route exact path="/add-contact" 
                    component={AddContact} 
                    loggedIn={this.state.loggedIn} 
                    user={this.state.user}
                    handleLogin={this.handleLogin}
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
