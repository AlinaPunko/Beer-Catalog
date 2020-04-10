import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import Input from 'components/common/Input/input';
import PhotoSelector from 'components/common/PhotoSelector/photoSelector';
import signUpValidationConfig from 'validationConfigs/signUpValidationConfig';
import serviceWrapper from 'helpers/serviceWrapper';
import { UserContext } from 'store/context/userContext';
import signUpService from 'services/signUpService';
import redirectHelper from 'helpers/redirectHelper';

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

    static contextType = UserContext;

    constructor(props, context) {
        super(props, context);

        this.validator = new SimpleReactValidator();
        this.errorFieldRef = React.createRef();
        this.state = {
            photo: '',
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
            birthdate: ''
        };
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changeBirthdate = (event) => {
        this.setState({
            birthdate: event.target.value
        });
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    changeConfirmedPassword = (event) => {
        this.setState({
            confirmedPassword: event.target.value
        });
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    changePhoto = (photo) => {
        this.setState({ photo });
    }

    signUp = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = { ...this.state };
            const result = await serviceWrapper.callService(signUpService.signUp, userData, this.errorFieldRef);
            if (result) {
                this.context.setUserId(result);
                redirectHelper.redirectToHomePage(this.props.history);
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    renderValidationResult = () => {
        const messages = [
            this.validator.message(signUpValidationConfig.email.fieldName, this.state.email, signUpValidationConfig.email.rule),
            this.validator.message(signUpValidationConfig.password.fieldName, this.state.password, signUpValidationConfig.password.rule),
            this.validator.message(signUpValidationConfig.name.fieldName, this.state.name, signUpValidationConfig.name.rule),
            this.validator.message(
                signUpValidationConfig.confirmedPassword.fieldName,
                this.state.confirmedPassword,
                signUpValidationConfig.confirmedPassword.rule(this.state.password)
            )
        ];

        return (
            <div className="sign-up-page__validation-result" ref={this.errorFieldRef}>
                { messages }
            </div>
        );
    }

    render() {
        return (
            <section className="sign-up-page">
                <h1 className="sign-up-page__title">Sign up</h1>
                <form className="sign-up-page__form" onSubmit={this.signUp}>
                    <Input name="name" type="text" label="Name:" onChange={this.changeName} value={this.state.name} />
                    <Input name="email" type="email" label="E-mail:" onChange={this.changeEmail} value={this.state.email} />
                    <Input name="password" type="password" label="Password:" onChange={this.changePassword} value={this.state.password} />
                    <Input
                        name="confirmedPassword"
                        type="password"
                        label="Confirm password:"
                        onChange={this.changeConfirmedPassword}
                        value={this.state.confirmedPassword}
                    />
                    <Input name="birthdate" type="date" label="Select birthdate:" onChange={this.changeBirthdate} value={this.state.birthdate} />
                    <PhotoSelector onChange={this.changePhoto} />
                    {
                        this.renderValidationResult()
                    }
                    <button type="submit" className="sign-up-page__form-button">Sign Up</button>
                </form>
            </section>
        );
    }
}

export default withRouter(SignUpPage);
