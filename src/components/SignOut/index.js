import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import { withRouter } from 'react-router-dom'

const Back = ({ firebase }) => (
    <BackForm firebase={firebase} />
)

class BackFormBase extends Component {

    onSubmit = (event) => {
        this.props.firebase.doSignOut().then(()=>
        localStorage.clear()).then(()=>
        this.props.history.push(ROUTES.SIGN_IN))
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <button type="submit">Sign Out</button>
            </form>
        )
    }
}
const BackForm = withRouter(withFirebase(BackFormBase));

export default Back;

export { BackForm };