import React from 'react';

import Icon from 'components/common/Icon/icon';
import preferenceService from 'services/preferenceService';
import { UserContext } from 'store/context/userContext';
import serviceWrapper from 'wrappers/serviceWrapper';

import plus from 'styles/icons/plus.svg';
import './userPreferenceSection.scss';
import UserPreferenceListItem from 'components/ProfilePage/UserPreferenceListItem/userPreferenceListItem';

export default class UserPreferenceSection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentPreference: '',
            userPreferences: [],
            suitablePreferences: []
        };
    }

    async componentDidMount() {
        this.loadUserPreferences();
    }

    onPreferenceFieldInput = (e) => {
        this.setState({ currentPreference: e.target.value });
    }

    addPreference = async () => {
        const preference = {
            UserId: this.context.userId,
            PreferencedBeerType: this.state.currentPreference
        };
        await serviceWrapper.callService(preferenceService.add, preference, null);
        this.loadUserPreferences();
    }

    loadUserPreferences = async () => {
        const { userId } = this.context;
        const result = await serviceWrapper.callService(preferenceService.getUserPreferences, userId, null);
        this.setState({
            userPreferences: result
        });
        this.renderPreferences();
    }

    renderPreferences = (item) => {
        const preferences = this.state.userPreferences.map((item, index) => {
            return (
                <UserPreferenceListItem key={index} preferencedBeerType={item} deletePreference={this.deletePreference} />
            );
        });
        return preferences;
    }

    deletePreference = async (preference) => {
        debugger;
        await serviceWrapper.callService(preferenceService.deletePreference, preference, null);
        this.loadUserPreferences();
    }

    render() {
        return (
            <section>
                <h2 className="user-preference-section__header">Your preferences</h2>
                <div className="user-preference-section__field">
                    <label className="user-preference-section__field-title">Input preference</label>
                    <input
                        type="text"
                        name="preference"
                        value={this.state.currentPreference}
                        onChange={this.onPreferenceFieldInput}
                        className="user-preference-section__field-input"
                    />
                    <button type="button" className="user-preference-section__add-button" onClick={this.addPreference}>
                        <Icon icon={plus} iconClassName="header__button-add-button-icon" />
                    </button>
                </div>
                <ul className="user-preference-section__list">
                    {this.renderPreferences()}
                </ul>
            </section>
        );
    }
}

UserPreferenceSection.contextType = UserContext;
