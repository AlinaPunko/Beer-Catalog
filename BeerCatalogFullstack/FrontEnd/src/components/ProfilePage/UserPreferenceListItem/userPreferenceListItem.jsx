import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import Icon from 'components/common/Icon/icon';

import './userPreferenceListItem.scss';
import minus from 'styles/icons/minus.svg';

export default class UserPreferenceListItem extends React.PureComponent {
    static propTypes = {
        preferencedBeerType: PropTypes.string.isRequired,
        deletePreference: PropTypes.func.isRequired
    }

    onDelete = () => {
        const item = {
            userId: this.context.userId,
            preferencedBeerType: this.props.preferencedBeerType
        };
        this.props.deletePreference(item);
    }

    render() {
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
