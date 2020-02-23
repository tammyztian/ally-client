import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import { addContact } from '../actions/add-contact';



export class AddContactsForm extends React.Component {
    onSubmit(values) {
        const {phoneNumber1, firstName1, lastName1, phoneNumber2, firstName2, lastName2} = values;

        const contact1 = {firstName: firstName1, lastName: lastName1, phoneNumber: phoneNumber1};
        const contact2 = {firstName: firstName2, lastName: lastName2, phoneNumber: phoneNumber2};


        const contacts = [contact1, contact2];
        return this.props
            .dispatch(addContact(contacts))
            // .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
                <h1>Contact 1</h1>
                <label htmlFor="phoneNumber1">Phone Number </label>
                <Field
                    component={Input}
                    type="text"
                    name="phoneNumber1"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="firstName1">First name</label>
                <Field component={Input} type="text" name="firstName1" />
                
                <label htmlFor="lastName1">Last name</label>
                <Field component={Input} type="text" name="lastName1" />

                <h1>Contact 2</h1>
                <label htmlFor="phoneNumber2"> Phone Number </label>
                <Field
                    component={Input}
                    type="text"
                    name="phoneNumber2"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="firstName2">First name</label>
                <Field component={Input} type="text" name="firstName2" />
                
                <label htmlFor="lastName2">Last name</label>
                <Field component={Input} type="text" name="lastName2" />
                
               <br/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(AddContactsForm);
