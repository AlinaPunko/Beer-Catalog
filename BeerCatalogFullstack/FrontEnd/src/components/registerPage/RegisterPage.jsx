import React from 'react';

import './registerPage.scss';

export default class RegisterPage extends React.PureComponent {
    render() {
        return(
            <div className="register-page">
                <h1 className="register-page__title">Register</h1>
                <form className="register-page__form" action="/account/register" method="post" >
                    <div className="register-page__field">
                        <label className="register-page__field-title">E-mail</label>
                        <input name="email" type="email" className="register-page__field-input"></input>
                    </div>
                    <div className="register-page__field">
                        <label className="register-page__field-title">Password</label>
                        <input name="password" type="password" className="register-page__field-input"></input>
                    </div>
                    <div className="register-page__field">
                        <label className="register-page__field-title">Repeat password</label>
                        <input name="passwordConfirm" type="password" className="register-page__field-input"></input>
                    </div>
                    <button type="submit" className="register-page__form-button">Register</button>
                </form>
            </div>
        )                 
    }
}
