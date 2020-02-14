import React from 'react';

import './registerPage.scss';


export default class RegisterPage extends React.PureComponent {
    render() {
        return(
            <div className="register-page">
                <h1 className="register-page__title">Register</h1>
                <form className="register-page__form">
                    <div className="register-page__field">
                        <label className="register-page__field-title">E-mail</label>
                        <input type="email" className="register-page__field-input"></input>
                    </div>
                    <div className="register-page__field">
                        <label className="register-page__field-title">Password</label>
                        <input type="password" className="register-page__field-input"></input>
                    </div>
                    <div className="register-page__field">
                        <label className="register-page__field-title">Repeat password</label>
                        <input type="password" className="register-page__field-input"></input>
                    </div>
                    <button className="register-page__form-button">Register</button>
                </form>
            </div>
        )                 
    }
}
