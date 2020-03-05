import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import urlHelper from 'helpers/urlHelper';
import routing from 'constants/routing';
import './openBrewPageButton.scss';

export default class OpenBrewPageButton extends React.PureComponent {
    static propTypes = {
        brewId: PropTypes.number.isRequired
    }

    render() {
        const { brewId } = this.props;
        return (
            <UserContext.Consumer>
                {({ userId }) => (
                    userId !== ''
                        && (
                            <Link to={urlHelper.getUrlWithParameter(routing.brewPage.url, /:id/, brewId)}>
                                <button type="button" className="open-brew-page-button">Open brewing info</button>
                            </Link>
                        )
                )}
            </UserContext.Consumer>
        );
    }
}

OpenBrewPageButton.contextType = UserContext;
