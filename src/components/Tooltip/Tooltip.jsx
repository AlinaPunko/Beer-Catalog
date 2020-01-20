import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './tooltip.scss';

export default class Tooptip extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        isShown: PropTypes.bool.isRequired
    }

    render() {
        const { text, isShown } = this.props;

        const tooltipClass = classnames('tooltip',
            {
                'tooltip--visible': isShown,
                'tooltip--hidden': !isShown
            });

        return (
            <span className={tooltipClass}>
                {text}
            </span>
        );
    }
}
