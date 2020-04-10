import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import urlHelper from 'helpers/urlHelper';
import routing from 'constants/routing';
import './openDetailsPageButton.scss';

export default class OpenDetailsPageButton extends React.PureComponent {
    static propTypes = {
        beerId: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired
    }

    render() {
        const { beerId, className } = this.props;
        const buttonClass = classnames('open-details-page-button', className);
        return (
            <Link to={urlHelper.getUrlWithParameter(routing.beerDetailsPage.url, /:id/, beerId)}>
                <button type="button" className={buttonClass}>Open</button>
            </Link>
        );
    }
}
