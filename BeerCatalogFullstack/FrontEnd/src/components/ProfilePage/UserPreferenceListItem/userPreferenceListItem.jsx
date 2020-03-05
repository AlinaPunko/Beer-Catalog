import React, { useContext } from 'react';

import Icon from 'components/common/Icon/icon';
import preferenceService from 'services/preferenceService';
import { UserContext } from 'store/context/userContext';
import serviceWrapper from 'wrappers/serviceWrapper';

import minus from 'styles/icons/minus.svg';
import './userPreferenceListItem.scss';

export default class UserPreferenceListItem extends React.PureComponent {
    onDelete = () => {
        const item = {
            userId: this.context.userId,
            preferencedBeerType: this.props.preferencedBeerType
        };
        this.props.deletePreference(item);
    }

    render() {
        debugger;
        return (
            <li className="user-preference-list-item">
                {this.props.preferencedBeerType}
                <button type="button" className="user-preference-list-item__delete-button" onClick={this.onDelete}>
                    <Icon icon={minus} iconClassName="user-preference-list-item__delete-button-icon" />
                </button>
            </li>
        );
    }
}

UserPreferenceListItem.contextType = UserContext;
