import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignInPage = () => (
  <div>
    <h1>Wellcome</h1>
    <SignInForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  psw: '',
  error: ''
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, psw } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, psw)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LIST_FIELD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState(
        {
            [event.target.name]: event.target.value
        }
    );
};

  render(){
    const{
      email,
      psw,
      error
    }=this.state

    const isInvalid=
    email===''||
    psw==='';

    return(
      <form onSubmit={this.onSubmit}>
      <input type="text"
      name="email"
      value={email}
      onChange={this.onChange}
      placeholder="eMail"/>

      <input type="password"
      name="psw"
      value={psw}
      onChange={this.onChange}
      placeholder="*****"/>

      <button onClick={this.onSubmit} disabled={isInvalid}>Login</button>
      {error && <p>{error.message}</p>}
      </form>
    )
  }



}
const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm};

























/*import React, { Component } from 'react'

class SignIn extends Component {
  routeChange() {
    let path = "aaa";
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Mail</label>
          <input type="text" className="form-control" id="inputMail" placeholder={"a.massaro196@gmail.com"} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Password</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder={"*******"} />
        </div>
        <button onClick={this.routeChange.bind(this)} className="btn btn-primary mb-2">Confirm identity</button>
      </div>
    )
  }
}

export default SignIn*/