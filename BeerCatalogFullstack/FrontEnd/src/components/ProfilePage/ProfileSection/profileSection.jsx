import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import FormRow from 'components/common/FormRow/formRow';
import SelectPhotoField from 'components/common/SelectPhotoField/selectPhotoField';
import UserPreferenceSection from 'components/profilePage/UserPreferenceSection/userPreferenceSection';
import profileValidationConfig from 'validationConfigs/profileValidationConfig';
import userService from 'services/userService';
import serviceWrapper from 'helpers/serviceWrapper';
import redirectToHomePageHelper from 'helpers/redirectToHomePageHelper';
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
            birthdate: user.birthdate ? user.birthdate.slice(0, 10) : ''
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
        this.setState({ birthdate: e.target.value.slice(0, 10) });
    }

    changePhoto = (event) => {
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

    save = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = { ...this.state };
            await serviceWrapper.callService(userService.updateUser, userData, this.errorFieldRef);
            alert('The user was updated');
            redirectToHomePageHelper.redirect(this.props.history);
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
        return (
            <div className="profile-section__validation-result" ref={this.errorFieldRef}>
                {
                    this.validator.message(profileValidationConfig.email.fieldName, this.state.email, profileValidationConfig.email.rule)
                }
                {
                    this.validator.message(profileValidationConfig.name.fieldName, this.state.name, profileValidationConfig.name.rule)
                }
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
                        <SelectPhotoField onChange={this.changePhoto} />
                        <button className="profile-section__button" type="button" onClick={this.deletePhoto}>
                                Delete photo
                        </button>
                    </div>
                    <div className="profile-section__user-info">
                        <FormRow name="name" type="text" label="Name:" onChange={this.changeName} value={this.state.name} />
                        <FormRow name="email" type="email" label="E-mail:" onChange={this.changeEmail} value={this.state.email} />
                        <FormRow
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
                            <input type="submit" className="profile-section__button" onClick={this.save} value="Save" />
                            <input type="reset" className="profile-section__button" onClick={this.close} value="Close" />
                        </div>
                        <UserPreferenceSection />
                    </div>
                </form>
            </section>
        );
    }
}

export default withRouter(ProfileSection);
