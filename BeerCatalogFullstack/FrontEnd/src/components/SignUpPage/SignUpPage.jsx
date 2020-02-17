import React from 'react';

import './signUpPage.scss';

export default class SignUpPage extends React.PureComponent {
    render() {
        return(
            <div className="sign-up-page">
                <h1 className="sign-up-page__title">Sign up</h1>
                <form className="sign-up-page__form" action="/account/join" method="post" enctype="multipart/form-data" >
                <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Name</label>
                        <input name="name" type="text" className="sign-up-page__field-input"></input>
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">E-mail</label>
                        <input name="email" type="email" className="sign-up-page__field-input"></input>
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Password</label>
                        <input name="password" type="password" className="sign-up-page__field-input"></input>
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Repeat password</label>
                        <input name="passwordConfirm" type="password" className="sign-up-page__field-input"></input>
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Select birthdate</label>
                        <input name="birthdate" type="date" className="sign-up-page__field-input"></input>
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Select photo</label>
                        <input name="photo" type="file" className="sign-up-page__field-input" accept="image/x-png,image/gif,image/jpeg"></input>
                    </div>
                    <button type="submit" className="signin-page__form-button">Sign up</button>
                </form>
            </div>
        )                 
    }
}

