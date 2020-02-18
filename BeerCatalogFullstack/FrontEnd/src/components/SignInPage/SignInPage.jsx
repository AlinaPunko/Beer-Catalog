import React from 'react';
import { withRouter } from 'react-router-dom';

import { UserContext } from 'store/context/UserContext';
import loginService from 'services/loginService';
import './signInPage.scss';

class SignInPage extends React.PureComponent {
    async loginButtonClick(setUserId, Id) {
        let userData = {};
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
        debugger;
        if(email == '' || password == '')
        {
            return;
        }

        userData.email = email;
        userData.password = password;
        const result = await loginService.login(userData);
        setUserId(result);
        this.props.history.push('/')
    }

    render() {
        return (
            <UserContext.Consumer>
                {({setUserId, userId}) => (
                    <div className="sign-in-page">
                        <h1 className="sign-in-page__title">Log In</h1>
                        <div className="sign-in-page__form">
                            <div className="sign-in-page__field">
                                <label className="sign-in-page__field-title">E-mail</label>
                                <input name="email" type="email" className="sign-in-page__field-input"></input>
                            </div>
                            <div className="sign-in-page__field">
                                <label className="sign-in-page__field-title">Password</label>
                                <input name="password" type="password" className="sign-in-page__field-input"></input>
                            </div>
                            <button className="sign-in-page__form-button" onClick={this.loginButtonClick.bind(this,setUserId, userId)}>Log in</button>
                            <span className="sign-in-page__result"></span>
                        </div>
                    </div>
                )}
            </UserContext.Consumer>
        )     
    }
}

export default withRouter(SignInPage)