import React from 'react';

import './loginPage.scss';


export default class LoginPage extends React.PureComponent {
    render() {
        return (
            <div className="login-page">
                <h1 className="login-page__title">Log In</h1>
                <form className="login-page__form">
                    <div className="login-page__field">
                        <label className="login-page__field-title">E-mail</label>
                        <input type="email" className="login-page__field-input"></input>
                    </div>
                    <div className="login-page__field">
                        <label className="login-page__field-title">Password</label>
                        <input type="password" className="login-page__field-input"></input>
                    </div>
                    <button className="login-page__form-button">Log in</button>
                </form>
            </div>
        )     
    }
}
