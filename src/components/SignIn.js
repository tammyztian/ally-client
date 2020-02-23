import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {isTrimmed, required, nonEmpty, length} from '../validators';
import '../index.css';
import Button from 'react-bootstrap/Button'

const passwordLength = length({min: 10, max: 72});

export  class SignIn extends React.Component {

    render() {
        return (

            <form>

                <div className="SignIn">
                <label htmlFor="phone number">Phone number</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="phone number"
                 />
                <label htmlFor="password">Password</label>

                <Field 
                    component={Input}
                    type="text"
                    name="password" 
                />

                <Button type="submit">
                    Sign In
                </Button>
                </div>
            </form>
        );
    }
}



export default reduxForm({
    form: 'registration',
})(SignIn);