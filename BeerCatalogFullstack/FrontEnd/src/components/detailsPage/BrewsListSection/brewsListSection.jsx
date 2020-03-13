import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import OpenBrewingInfoPageButton from 'components/common/OpenBrewingInfoPageButton/openBrewingInfoPageButton';
import brewingService from 'services/brewingService';
import './brewsListSection.scss';

export default class BrewsListSection extends React.PureComponent {
    static contextType = UserContext;

    static propTypes = {
        beerId: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { brews: [] };
    }

    componentDidMount = () => {
        this.getBrews();
    }

    getBrews = async () => {
        const result = await brewingService.getBrewsByBeerId(this.props.beerId);
        this.setState({ brews: result });
    }

    render() {
        const brews = this.state.brews.map((brew, index) => {
            return (
                <li key={index} className="brews-list-section__list-item">
                    {brew.dateTime.replace('T', ' ')} {brew.location}
                    <OpenBrewingInfoPageButton brewId={brew.id} beerId={this.props.beerId} text="Show info" className="brews-list-section__button" />
                </li>
            );
        });

        if (this.context.userId) {
            return (
                <section className="brews-list-section">
                    <h2 className="brews-list-section__title">Brews</h2>
                    <ul className="brews-list-section__list">
                        {brews}
                    </ul>
                </section>
            );
        }
        return null;
    }
}
