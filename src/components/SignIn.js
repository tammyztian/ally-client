import React from 'react';

export default class SignIn extends React.Component {

    render() {
        return (
            <form
                className="SignIn"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="phone number">phone number</label>
                <Field component={Input} type="text" name="phone number" />
                <label htmlFor="password">password</label>
                <Field component={Input} type="text" name="password" />
                <Field
                    component={Input}
                    type="text"
                    name="phone number"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    <link to="Allybutton">Sign In</link>
                </button>
            </form>
        );
    }
}