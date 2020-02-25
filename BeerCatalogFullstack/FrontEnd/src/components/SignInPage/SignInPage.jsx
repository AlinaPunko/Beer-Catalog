import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

import { UserContext } from 'store/context/UserContext';
import loginService from 'services/loginService';
import './signInPage.scss';

class SignInPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
        this.formRef = React.createRef();
        this.state={
            email: "",
            password: ""
        }
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    emailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    async signInFormSubmit(setUserId, e) {
        e.preventDefault();
        if (this.validator.allValid()) {
            let userData = {};
            userData.email = this.state.email;
            userData.password = this.state.password;
            const loginResult = await loginService.login(userData);
            const { userId } = loginResult;
            
            if(userId) {
                setUserId(userId);
                this.props.history.push('/');
                return;
            }

            const {error} = result;
            document.getElementsByClassName("sign-in-page__result")[0].innerHTML = error;
        } 
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <UserContext.Consumer>
                {({setUserId}) => (
                    <section className="sign-in-page">
                        <h1 className="sign-in-page__title">Log In</h1>
                        <form className="sign-in-page__form" ref={this.formRef} onSubmit={this.signInFormSubmit.bind(this, setUserId)}>
                            <div className="sign-in-page__field">
                                <label className="sign-in-page__field-title">E-mail</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.emailChange}
                                    className="sign-in-page__field-input">
                                </input>
                            </div>
                            <div className="sign-in-page__field">
                                <label className="sign-in-page__field-title">Password</label>
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.passwordChange}
                                    type="password"
                                    className="sign-in-page__field-input">
                                </input>
                            </div>
                            <input className="sign-in-page__form-button" type="submit" value="Log in"></input>
                            <div className="sign-in-page__validation-result">
                                {
                                    this.validator.message('Email', this.state.email, 'required|email')
                                }
                                {
                                    this.validator.message('Password', this.state.password, 'required|min:6')
                                }
                            </div>
                            {/* <span className="sign-in-page__result"></span> */}
                        </form>
                    </section>
                )}
            </UserContext.Consumer>
        )     
    }
}

export default withRouter(SignInPage)