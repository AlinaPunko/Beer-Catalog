import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { UserContext } from 'store/context/userContext';
import serviceWrapper from 'helpers/serviceWrapper';
import Icon from 'components/common/Icon/icon';
import OpenBrewingInfoPageButton from 'components/common/OpenBrewingInfoPageButton/openBrewingInfoPageButton';
import brewingService from 'services/brewingService';

import deleteIcon from 'styles/icons/deleteIcon.svg';
import './brewsListSection.scss';

export default class BrewsListSection extends React.PureComponent {
    static contextType = UserContext;

    static propTypes = {
        beerId: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { brews: [] };
    }

    componentDidMount = () => {
        this.getBrews();
    }

    getBrews = async () => {
        const result = await serviceWrapper.callService(brewingService.getBrewsByBeerId, this.props.beerId, null);

        if (result) {
            this.setState({ brews: result });
        }
    }

    async deleteBrew(brew) {
        await serviceWrapper.callService(brewingService.deleteItem, brew, null);
        this.getBrews();
    }

    render() {
        const { beerId } = this.props;

        const brews = this.state.brews.map((brew, index) => {
            return (
                <li key={index} className="brews-list-section__list-item">
                    {moment(brew.dateTime).format('YYYY-MM-DD hh:mm')} {brew.location}
                    {this.context.userId === brew.userId && (
                        <button type="button" className="brews-list-section__button" onClick={this.deleteBrew.bind(this, brew)}>
                            <Icon icon={deleteIcon} iconClassName="brews-list-section__button-icon" />
                        </button>
                    )}
                    <OpenBrewingInfoPageButton
                        brewId={brew.id}
                        beerId={beerId}
                        text="Show info"
                        className="brews-list-section__button"
                    />
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
                    <OpenBrewingInfoPageButton brewId={0} beerId={beerId} text="Add brew" className="brews-list-section__button" />
                </section>
            );
        }
        return null;
    }
}
