import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import getParametrisedURL from 'helpers/urlHelper';
import './openDetailsPageButton.scss';

export default class OpenDetailsPageButton extends React.PureComponent {
    static propTypes = {
        beerID: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired
    }

    render() {
        const { beerID, className } = this.props;
        const buttonClass = classnames('open-details-page-button', className);
        return (
            <Link to={getParametrisedURL('/details', beerID)}>
                <button type="button" className={buttonClass}>Open</button>
            </Link>
        );
    }
}
