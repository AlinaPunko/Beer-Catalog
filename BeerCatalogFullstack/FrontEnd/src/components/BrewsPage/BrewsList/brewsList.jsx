import React from 'react';

import userService from 'services/userService';
import serviceWrapper from 'helpers/serviceWrapper';
import BrewsListItem from 'components/BrewsPage/BrewsListItem/brewsListItem';
import { UserContext } from 'store/context/userContext';
import Icon from 'components/common/Icon/icon';

import preloader from 'styles/icons/preloader.svg';
import './brewsList.scss';

export default class BrewsList extends React.PureComponent {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            brews: []
        };
    }

    componentDidMount = async () => {
        const result = await serviceWrapper.callService(userService.getPreferedBrews, this.context.userId, null);

        if (result) {
            this.setState({ brews: result });
        }

        this.setState({ isLoading: false });
    }

    render() {
        const renderedBrews = this.state.brews.map((brew, index) => (<BrewsListItem key={index} brew={brew} />));
        return (
            <section className="brews-list">
                <h1 className="brews-list__title">Your prefered brews</h1>
                {renderedBrews}
                {this.state.isLoading && (
                    <div className="brews-list__preloader">
                        <Icon iconClassName="brews-list__preloader-icon" icon={preloader} />
                    </div>
                )}
            </section>
        );
    }
}
