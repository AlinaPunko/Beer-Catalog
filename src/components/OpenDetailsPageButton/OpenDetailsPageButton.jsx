import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import getParametrisedURL from 'helpers/routeURLHelper';
import './openDetailsPageButton.scss';

export default class OpenDetailsPageButton extends React.PureComponent {
    static propTypes = {
        beerID: PropTypes.number.isRequired,
        parentElement: PropTypes.string.isRequired
    }

    render() {
        const { beerID, parentElement } = this.props;
        const buttonClass = classnames('open-details-page-button', {
            'open-details-page-button--on-beers-list': parentElement === 'BeersListItem',
            'open-details-page-button--on-favourites-list': parentElement === 'FavouriteListItems'
        });
        return (
            <Link to={getParametrisedURL('/details', beerID)}>
                <button type="button" className={buttonClass}>Open</button>
            </Link>
        );
    }
}
