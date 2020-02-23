import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import '../index.css';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';



export  class SignIn extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
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

<div class="sign-up">

            <form 
                
                onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
            
        
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
                    type="text"
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
            </div>
        );
    }
}



export default reduxForm({
    form: 'signin-form',
    //onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SignIn);