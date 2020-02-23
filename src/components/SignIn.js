import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import '../index.css';
import {required, nonEmpty} from '../validators';
import {Redirect, Link} from 'react-router-dom';




export  class SignIn extends React.Component {
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

        this.onSubmit = this.onSubmit.bind(this);

    }

    

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push('/add-contact');


        
    }

    render() {
      
        let error;

        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            console.log('== this is state logged ins==', this.state.loggedIn),

            <form 
                className="signin-form"
                onSubmit={(e) => this.onSubmit(e)}
            >
            
        
                <label htmlFor="phoneNumber">Phone Number</label>

                <Field 
                    component={Input} 
                    type="text" 
                    name="phoneNumber"
                    id="phoneNumber"
                    validate={[required, nonEmpty]}
                 />
                <label htmlFor="password">Password</label>

                <Field 
                    component={Input}
                    type="password"
                    name="password" 
                    id="password"
                    validate={[required, nonEmpty]}
                />
     
                <button
                    type="submit"
                >
                      Sign in
                </button>

            </form>
        );
    }
}



export default reduxForm({
    form: 'signin-form',
    //onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SignIn);