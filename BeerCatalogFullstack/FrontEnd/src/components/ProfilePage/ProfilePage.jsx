import React from 'react';
import { withRouter } from 'react-router-dom';

import { UserContext } from 'store/context/UserContext';

import './profilePage.scss';

export default class ProfilePage extends React.PureComponent {
    render() {
        return (
            <section className="profile-page">
                <h1 className="profile-page__title">Your profile</h1>
                <form className="profile-page__content">
                    <div className="profile-page__image-block">
                    <img
                        className="profile-page__user-image"
                        alt=""
                        src=""
                    />
                    <div>
                        <button className="profile-page__add-image-button">
                        Add image
                        </button>
                        <button className="profile-page__delete-image-button">
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
                        className="profile-page__field-input"
                        />
                    </div>
                    <div className="profile-page__field">
                        <label className="profile-page__field-title">E-mail</label>
                        <input
                        name="email"
                        type="email"
                        className="profile-page__field-input"
                        />
                    </div>
                    <div className="profile-page__field">
                        <label className="profile-page__field-title">Birthdate</label>
                        <input
                        name="birhdate"
                        type="date"
                        className="profile-page__field-input"
                        />
                    </div>
                    <button className="profile-page__save-button">Save</button>
                    <button className="profile-page__close-button">Close</button>
                    </div>
                </form>
            </section>
        )     
    }
}