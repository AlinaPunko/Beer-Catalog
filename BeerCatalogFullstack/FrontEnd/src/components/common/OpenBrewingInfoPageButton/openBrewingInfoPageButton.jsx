import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { UserContext } from 'store/context/userContext';
import urlHelper from 'helpers/urlHelper';
import routing from 'constants/routing';

import './openBrewingInfoPageButton.scss';

export default class OpenBrewingInfoPageButton extends React.PureComponent {
    static propTypes = {
        brewId: PropTypes.number.isRequired,
        beerId: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

    static contextType = UserContext;

    render() {
        const {
            beerId, brewId, className, text
        } = this.props;
        const buttonClass = classnames('open-brewing-info-page-button', className);

        let url = urlHelper.getUrlWithParameter(routing.brewingInfoPage.url, /:beerId/, beerId);
        url = urlHelper.getUrlWithParameter(url, /:brewId/, brewId);

        if (this.context.userId) {
            return (
                <Link to={url}>
                    <button type="button" className={buttonClass}>{text}</button>
                </Link>
            );
        }
        return null;
    }
}
