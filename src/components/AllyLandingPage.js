import React from 'react';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function AllyLandingPage(props) {
  
    if (props.loggedIn) {
        console.log('===this is props====', props)

        return <Redirect to="/home" user={props.user} />;
    }

    return (

        console.log('====this is props===', props),
        <div className="home">

            <h2>Hi, I'm Ally</h2>

            <SignIn {...props}/>

            <Link to="/register" loggedIn={props.loggedIn}> Register </Link>


        </div>
    );

}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AllyLandingPage);


