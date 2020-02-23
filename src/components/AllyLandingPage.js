import React from 'react';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function AllyLandingPage(props) {
  
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="home">

            <h2>Hi, I'm Ally</h2>

            <SignIn/>

            <Link to="/register"> Register </Link>


        </div>
    );

}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AllyLandingPage);

