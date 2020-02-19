import React from 'react';
import {withRouter } from 'react-router-dom';

import validationHelper from 'helpers/validationHelper.js'
import {UserContext} from 'store/context/UserContext';
import signUpService from 'services/signUpService';

import './signUpPage.scss';

class SignUpPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={photo: " "}
    }

    async signUpButtonClick(setUserId) {
        let userData = {};
        const name = document.getElementsByName("name")[0].value;
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
        const passwordConfirm = document.getElementsByName("passwordConfirm")[0].value;
        const birthdate = document.getElementsByName("birthdate")[0].value;

        if (name == "" ||
            password == "" ||
            passwordConfirm == "" ||
            password !== passwordConfirm ||
            !validationHelper.isEmailValid(email))
        {
            alert("Incorrect data");
            return;
        }
        
        userData.name = name;
        userData.email = email;
        userData.password = password;
        userData.passwordConfirm = passwordConfirm;
        userData.birthdate = birthdate;
        userData.photo = this.state.photo;
        const result = await signUpService.signUp(userData);
        const {userID} = result;
        if(userID){
            setUserId(result);
            this.props.history.push('/');
            return;
        }
        
        const errors =[...result.error].map((e) => e.description);
        errors.forEach(error => {
            document.getElementsByClassName("sign-up-page__result")[0].innerHTML += error + '</br>';
        });
    }

    encodeImageFileAsURL = () => {
        const filesSelected = document.getElementsByName("photo")[0].files;
        if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0]; 
            const fileReader = new FileReader();   
            fileReader.onload = fileLoadedEvent => {
                const srcData = fileLoadedEvent.target.result;
                this.setState({photo: srcData});
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    render() {
        return(
            <UserContext.Consumer>
            {({setUserId}) => (
                <section className="sign-up-page">
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
                            <input
                                name="photo"
                                type="file"
                                className="sign-up-page__field-input"
                                onChange={this.encodeImageFileAsURL}
                                accept="image/x-png,image/gif,image/jpeg">
                            </input>
                        </div>
                        <span className="sign-up-page__result"></span>
                        <button type="submit" className="sign-up-page__form-button" onClick={this.signUpButtonClick.bind(this,setUserId)}>Sign up</button>
                    </div>
                </section>
            )}   
            </UserContext.Consumer>
        )                 
    }
}

export default withRouter(SignUpPage)