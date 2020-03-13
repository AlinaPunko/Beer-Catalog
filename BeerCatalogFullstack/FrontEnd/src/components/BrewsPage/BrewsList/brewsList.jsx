import React from 'react';

import UserService from 'services/userService';
import BrewsListItem from 'components/BrewsPage/BrewsListItem/brewsListItem';
import { UserContext } from 'store/context/userContext';

import './brewsList.scss';

export default class BrewsList extends React.PureComponent {
    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            brews: []
        };
    }

    componentDidMount = async () => {
        await this.getPreferedBrews();
    }

    getPreferedBrews = async () => {
        const result = await UserService.getPreferedBrews(this.context.userId);
        this.setState({ brews: result });
    }

    render() {
        const renderedBrews = this.state.brews.map((brew, index) => (<BrewsListItem key={index} brew={brew} />));
        return (
            <section className="brews-list">
                <h1 className="brews-list__title">Your prefered brews</h1>
                {renderedBrews}
            </section>
        );
    }
}
