import React from 'react'
import * as ROUTES from '../../constants/routes';
import Back from '../SignOut'

const Header = ({ user }) => (
    <div>
        {user ? <HeaderUserOk /> : <HeaderUserNotOk />}
    </div>
)

const HeaderUserOk = () => (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container">
            <div className="navbar-header">
                <ul>
                    <li><a href={ROUTES.LIST_FIELD}>Go to List</a></li>
                    <Back />
                </ul>
            </div>
        </div>
    </nav>
)


const HeaderUserNotOk = () => (
    <nav className="navbar navbar-dark bg-dark" >
        <div className="container">
            <div className="navbar-header">
                <ul>
                    <li><a href={ROUTES.SIGN_IN}>Sign In</a></li>
                    <li><a href={ROUTES.SIGN_UP}>Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header