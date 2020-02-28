import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import signInValidationConfig from 'validationConfigs/signInValidationConfig';
import serviceWrapper from 'wrappers/serviceWrapper';
import { UserContext } from 'store/context/userContext';
import signInService from 'services/signInService';
import './signInPage.scss';

class SignInPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.shape({
            length: PropTypes.number.isRequired,
            action: PropTypes.string.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string.isRequired,
                hash: PropTypes.string.isRequired
            }),
            push: PropTypes.func.isRequired
        }).isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.validator = new SimpleReactValidator();
        this.errorFieldRef = React.createRef();
        this.state = {
            email: '',
            password: ''
        };
        this.signInFormSubmit = this.signInFormSubmit.bind(this);
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

    signInFormSubmit = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = { ...this.state };
            const result = await serviceWrapper.callService(signInService.signIn, userData, this.errorFieldRef);

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
            <div className="sign-in-page__validation-result" ref={this.errorFieldRef}>
                {
                    this.validator.message('Email', this.state.email, signInValidationConfig.email.rule)
                }
                {
                    this.validator.message('Password', this.state.password, signInValidationConfig.password.rule)
                }
            </div>
        );
    }

    render() {
        return (
            <section className="sign-in-page">
                <h1 className="sign-in-page__title">Log In</h1>
                <form className="sign-in-page__form" onSubmit={this.signInFormSubmit}>
                    <div className="sign-in-page__field">
                        <label className="sign-in-page__field-title">E-mail</label>
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.emailChange}
                            className="sign-in-page__field-input"
                        />
                    </div>
                    <div className="sign-in-page__field">
                        <label className="sign-in-page__field-title">Password</label>
                        <input
                            name="password"
                            value={this.state.password}
                            onChange={this.passwordChange}
                            type="password"
                            className="sign-in-page__field-input"
                        />
                    </div>
                    <input className="sign-in-page__form-button" type="submit" value="Log in" />
                    {
                        this.getValidationResultField()
                    }
                </form>
            </section>
        );
    }
}

SignInPage.contextType = UserContext;
export default withRouter(SignInPage);
