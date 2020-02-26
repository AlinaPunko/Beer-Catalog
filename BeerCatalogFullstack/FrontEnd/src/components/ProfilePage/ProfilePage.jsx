import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import userService from 'services/userService';
import { UserContext } from 'store/context/userContext';

import './profilePage.scss';

class ProfilePage extends React.PureComponent {
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

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
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

    deletePhotoClick = () => {
        this.setState({ photo: '' });
    }

    onNameFieldChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onEmailFieldChange = (e) => {
        this.setState({ email: e.target.value });
    }

    onBirthdateFieldChange = (e) => {
        this.setState({ birthdate: e.target.value.slice(1, 10) });
    }

    onAddPhotoClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/x-png,image/gif,image/jpeg';
        input.onchange = () => {
            const filesSelected = input.files;
            if (filesSelected.length > 0) {
                const fileToLoad = filesSelected[0];
                const fileReader = new FileReader();
                fileReader.onload = (fileLoadedEvent) => {
                    this.setState({ photo: fileLoadedEvent.target.result });
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        };
        input.click();
    }

    onSaveClick = async (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const userData = {};
            userData.id = this.state.id;
            userData.name = this.state.name;
            userData.email = this.state.email;
            userData.birthdate = this.state.birthdate;
            userData.photo = this.state.photo;
            const result = await userService.updateUser(userData);
            if (result instanceof Error) {
                document.getElementsByClassName('profile-page__validation-result')[0].innerHTML = result.message;
                return;
            }
            alert('The user has been updated');
            this.props.history.push('/');
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    onCloseClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <section className="profile-page">
                <h1 className="profile-page__title">Your profile</h1>
                <form className="profile-page__content">
                    <div className="profile-page__image-block">
                        <img
                            className="profile-page__user-image"
                            alt=""
                            src={this.state.photo}
                        />
                        <div>
                            <button className="profile-page__add-image-button" type="button" onClick={this.onAddPhotoClick}>
                                Add image
                            </button>
                            <button className="profile-page__delete-image-button" type="button" onClick={this.deletePhotoClick}>
                                Delete image
                            </button>
                        </div>
                    </div>
                    <div className="profile-page__user-info">
                        <div className="profile-page__field">
                            <label className="profile-page__field-title">Name</label>
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                className="profile-page__field-input"
                                onChange={this.onNameFieldChange}
                            />
                        </div>
                        <div className="profile-page__field">
                            <label className="profile-page__field-title">E-mail</label>
                            <input
                                name="email"
                                type="email"
                                value={this.state.email}
                                className="profile-page__field-input"
                                onChange={this.onEmailFieldChange}
                            />
                        </div>
                        <div className="profile-page__field">
                            <label className="profile-page__field-title">Birthdate</label>
                            <input
                                name="birthdate"
                                type="date"
                                value={this.state.birthdate}
                                className="profile-page__field-input"
                                onChange={this.onBirthdateFieldChange}
                            />
                        </div>
                        <div className="profile-page__validation-result">
                            {
                                this.validator.message('Email', this.state.email, 'required|email')
                            }
                            {
                                this.validator.message('Name', this.state.name, 'required')
                            }
                        </div>
                        <input type="submit" className="profile-page__save-button" onClick={this.onSaveClick} value="Save" />
                        <input type="reset" className="profile-page__close-button" onClick={this.onCloseClick} value="Close" />
                    </div>
                </form>
            </section>
        );
    }
}

ProfilePage.contextType = UserContext;

export default withRouter(ProfilePage);
