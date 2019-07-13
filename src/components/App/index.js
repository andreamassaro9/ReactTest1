import React, { Component } from 'react'
import Header from '../header/Header'
import SignIn from '../SignIn/SignIn'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import FieldElement from '../FIeldElementList/index'
import SignUpPage from '../SignUp/index'
import { withFirebase } from '../Firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //elements: [],
      user: null
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(user => {
      user
        ? this.setState({ user })
        : this.setState({ user: null });
    });
  }

  componentWillUnmount() {
    this.listener()
  }

  /*onAddElementClick(element) {
    this.state.elements.push(element)
    this.setState(
      {
        elements: [...this.state.elements]
      }
    )
  }*/
  /*
    onDeleteElement(elementN) {
      this.state.elements.splice(elementN, 1)
      this.setState(
        {
          elements: [...this.state.elements]
        }
      )
    }*/
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header user={this.state.user} />
            <hr />
            <Route path={ROUTES.SIGN_IN} render={(props) => <SignIn  {...props} color="green" />} />
            {/*<Route path={ROUTES.LIST_FIELD} render={() =>
              <FieldElement renderx={(elements, onDeleteElement) => (<ToDoList elements={elements} onDelete={onDeleteElement} />)}>
              </FieldElement>}>
            </Route>*/}
            <Route path={ROUTES.LIST_FIELD} component={FieldElement}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          </div>
        </Router>
      </div>
    )
    /*return(
      <div>
        <FieldElement onNewElement={this.onAddElementClick.bind(this)}/>
        <ToDoList elements={this.state.elements} onDeleteElement={this.onDeleteElement.bind(this)}/>
      </div>
    )*/
  }
}


/*
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import SignIn from '../SignIn/SignIn'

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
    </div>
  </Router>
);*/

export default withFirebase(App);