import React from 'react';
import {withRouter } from 'react-router-dom';

import {UserContext} from 'store/context/UserContext';
import signUpService from 'services/signUpService';
import './signUpPage.scss';
class SignUpPage extends React.PureComponent {

    async signInButtonClick(){
        let userData = {};
        userData.name= document.getElementsByName("name")[0].value;
        userData.email = document.getElementsByName("email")[0].value;
        userData.password = document.getElementsByName("password")[0].value;
        userData.passwordConfirm = document.getElementsByName("passwordConfirm")[0].value;
        userData.birthdate = document.getElementsByName("birthdate")[0].value ? document.getElementsByName("birthdate")[0].value : null;
        userData.photo = document.getElementsByName("photo")[0].value ? document.getElementsByName("photo")[0].value : null;
        const userId = await signUpService.signUp(userData);
        setId(userId);
        this.props.history.push('/')
    }

    render() {
        return(
            <UserContext.Consumer>
            {({setUserId}) => (
                <div className="sign-up-page">
                    <h1 className="sign-up-page__title">Sign up</h1>
                    <div className="sign-up-page__form" >
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
                        <button type="submit" className="signin-page__form-button" onClick={this.signInButtonClick.bind(this,setUserId)}>Sign up</button>
                    </div>
                </div>
            )}   
            </UserContext.Consumer>
        )                 
    }
}

export default withRouter(SignUpPage)