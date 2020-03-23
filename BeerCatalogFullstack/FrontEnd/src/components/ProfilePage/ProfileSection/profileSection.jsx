import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import Input from 'components/common/Input/input';
import dateHelper from 'helpers/dateHelper';
import PhotoSelector from 'components/common/PhotoSelector/photoSelector';
import UserPreferenceSection from 'components/profilePage/UserPreferenceSection/userPreferenceSection';
import profileValidationConfig from 'validationConfigs/profileValidationConfig';
import userService from 'services/userService';
import serviceWrapper from 'helpers/serviceWrapper';
import redirectHelper from 'helpers/redirectHelper';
import { UserContext } from 'store/context/userContext';

import './profileSection.scss';

class ProfileSection extends React.PureComponent {
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

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.errorFieldRef = React.createRef();
        this.state = {
            photo: '',
            name: '',
            email: '',
            birthdate: ''
        };
    }

    async componentDidMount() {
        const user = await userService.getUser(this.context.userId);
        this.setState({
            id: user.id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            birthdate: user.birthdate ? dateHelper.getdate(user.birthdate) : ''
        });
    }

    deletePhoto = () => {
        this.setState({ photo: '' });
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }

    changeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    changeBirthdate = (e) => {
        this.setState({ birthdate: dateHelper.getdate(e.target.value) });
    }

    changePhoto = (photo) => {
        this.setState({ photo });
    }

    save = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = { ...this.state };
            await serviceWrapper.callService(userService.updateUser, userData, this.errorFieldRef);
            alert('The user was updated');
            redirectHelper.redirectToHomePage(this.props.history);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    close = (e) => {
        e.preventDefault();
        redirectToHomePageHelper.redirect(this.props.history);
    }

    renderValidationResult = () => {
        const messages = [
            this.validator.message(profileValidationConfig.email.fieldName, this.state.email, profileValidationConfig.email.rule),
            this.validator.message(profileValidationConfig.name.fieldName, this.state.name, profileValidationConfig.name.rule)
        ];

        return (
            <div className="profile-section__validation-result" ref={this.errorFieldRef}>
                {messages}
            </div>
        );
    }

    render() {
        return (
            <section className="profile-section">
                <h1 className="profile-section__title">Your profile</h1>
                <form className="profile-section__form">
                    <div className="profile-section__image-block">
                        <img
                            className="profile-section__user-image"
                            alt="avatar"
                            src={this.state.photo}
                        />
                        <PhotoSelector onChange={this.changePhoto} />
                        <button className="profile-section__button" type="button" onClick={this.deletePhoto}>
                            Delete photo
                        </button>
                    </div>
                    <div className="profile-section__user-info">
                        <Input name="name" type="text" label="Name:" onChange={this.changeName} value={this.state.name} />
                        <Input name="email" type="email" label="E-mail:" onChange={this.changeEmail} value={this.state.email} />
                        <Input
                            name="birthdate"
                            type="date"
                            label="Select birthdate:"
                            onChange={this.changeBirthdate}
                            value={this.state.birthdate}
                        />
                        {
                            this.renderValidationResult()
                        }
                        <div className="profile-section__buttons">
                            <button type="submit" className="profile-section__button" onClick={this.save}>Save</button>
                            <button type="button" className="profile-section__button" onClick={this.close}>Close</button>
                        </div>
                        <UserPreferenceSection />
                    </div>
                </form>
            </section>
        );
    }
}

export default withRouter(ProfileSection);
