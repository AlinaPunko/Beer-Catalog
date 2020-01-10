import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

import './sideMenuItem.scss';

export default class SideMenuItem extends React.PureComponent {
    render() {
        return (
            <div className="side-menu-item">
                <Icon id={this.props.image.id} viewBox={this.props.image.viewBox} className="side-menu-item__icon" />
                <div className="side-menu-item__text">{this.props.content}</div>
            </div>
        );
    }
}

SideMenuItem.propTypes = {
    image: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
};
