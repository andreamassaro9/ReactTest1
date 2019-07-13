import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.LIST_FIELD)
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    };

    render() {
        const {
            username,
            email,
            password,
            passwordConf,
            error,
        } = this.state;

        const isInvalid =
            password !== passwordConf ||
            password === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordConf"
                    value={passwordConf}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm};