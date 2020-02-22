import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {isTrimmed, required, nonEmpty, length} from '../validators';

const passwordLength = length({min: 10, max: 72});

export  class SignIn extends React.Component {

    render() {
        return (
            <form className="SignIn">
        
                <label htmlFor="phone number">phone number</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="phone number"
                 />
                <label htmlFor="password">password</label>

                <Field 
                    component={Input}
                    type="text"
                    name="password" 
                />
                
            
                <button
                    type="submit"
                    // <link to="Allybutton">Sign In</link
                >
                </button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'registration',
   
})(SignIn);