import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

import './sideMenuItem.scss';

export default class SideMenuItem extends React.PureComponent {
    static propTypes = {
        icon: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        const { icon, text } = this.props;
        return (
            <div className="side-menu-item">
                <Icon icon={icon} iconClassName="side-menu-item__icon" />
                <div className="side-menu-item__text">{text}</div>
            </div>
        );
    }
}
