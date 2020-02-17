import React from 'react';

import './signInPage.scss';


export default class SignInPage extends React.PureComponent {
    render() {
        return (
            <div className="sign-in-page">
                <h1 className="sign-in-page__title">Log In</h1>
                <form className="sign-in-page__form" action="/account/login" method="post" enctype="multipart/form-data">
                    <div className="sign-in-page__field">
                        <label className="sign-in-page__field-title">E-mail</label>
                        <input name="email" type="email" className="sign-in-page__field-input"></input>
                    </div>
                    <div className="sign-in-page__field">
                        <label className="sign-in-page__field-title">Password</label>
                        <input name="password" type="password" className="sign-in-page__field-input"></input>
                    </div>
                    <button className="sign-in-page__form-button">Log in</button>
                </form>
            </div>
        )     
    }
}