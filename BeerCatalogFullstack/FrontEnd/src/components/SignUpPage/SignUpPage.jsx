import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import signUpValidationConfig from 'validationConfigs/signUpValidationConfig';
import serviceWrapper from 'wrappers/serviceWrapper';
import { UserContext } from 'store/context/userContext';
import signUpService from 'services/signUpService';

import './signUpPage.scss';

class SignUpPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.shape({
            length: PropTypes.number.isRequired,
            action: PropTypes.string.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string.isRequired,
                hash: PropTypes.string.isRequired,
                key: PropTypes.string.isRequired
            }),
            push: PropTypes.func.isRequired
        }).isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.validator = new SimpleReactValidator();

        this.errorFieldRef = React.createRef();
        this.state = {
            photo: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthdate: ''
        };
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    birthdateChange = (event) => {
        this.setState({
            birthdate: event.target.value
        });
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    confirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        });
    }

    emailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    photoChange = (event) => {
        const filesSelected = event.target.files;
        if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent) => {
                const srcData = fileLoadedEvent.target.result;
                this.setState({ photo: srcData });
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    signUpFormSubmit = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = { ...this.state };
            const result = await serviceWrapper.callService(signUpService.signUp, userData, this.errorFieldRef);
            if (result) {
                this.context.setUserId(result);
                this.props.history.push('/');
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    getValidationResultField = () => {
        return (
            <div className="sign-up-page__validation-result" ref={this.errorFieldRef}>
                {
                    this.validator.message('Email', this.state.email, signUpValidationConfig.email.rule)
                }
                {
                    this.validator.message('Password', this.state.password, signUpValidationConfig.password.rule)
                }
                {
                    this.validator.message('Name', this.state.name, signUpValidationConfig.name.rule)
                }
                {
                    this.validator.message(
                        'Confirm password',
                        this.state.confirmPassword,
                        signUpValidationConfig.confirmPassword.rule(this.state.password)
                    )
                }
            </div>
        );
    }

    render() {
        return (
            <section className="sign-up-page">
                <h1 className="sign-up-page__title">Sign up</h1>
                <form className="sign-up-page__form" onSubmit={this.signUpFormSubmit}>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Name</label>
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.nameChange}
                            className="sign-up-page__field-input"
                        />
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">E-mail</label>
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.emailChange}
                            className="sign-up-page__field-input"
                        />
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.passwordChange}
                            className="sign-up-page__field-input"
                        />
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Confirm password</label>
                        <input
                            name="passwordConfirm"
                            type="password"
                            value={this.state.confirmPassword}
                            onChange={this.confirmPasswordChange}
                            className="sign-up-page__field-input"
                        />
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Select birthdate</label>
                        <input
                            name="birthdate"
                            type="date"
                            value={this.state.birthdate}
                            onChange={this.birthdateChange}
                            className="sign-up-page__field-input"
                        />
                    </div>
                    <div className="sign-up-page__field">
                        <label className="sign-up-page__field-title">Select photo</label>
                        <input
                            name="photo"
                            type="file"
                            className="sign-up-page__field-input"
                            onChange={this.photoChange}
                            accept="image/x-png,image/gif,image/jpeg"
                        />
                    </div>
                    {
                        this.getValidationResultField()
                    }
                    <input type="submit" className="sign-up-page__form-button" value="Sign up" />
                </form>
            </section>
        );
    }
}

SignUpPage.contextType = UserContext;
export default withRouter(SignUpPage);
