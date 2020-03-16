import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/icon';
import { UserContext } from 'store/context/userContext';
import serviceWrapper from 'helpers/serviceWrapper';
import brewingService from 'services/brewingService';

import './ratingPanel.scss';
import plus from 'styles/icons/plus.svg';
import minus from 'styles/icons/minus.svg';

export default class RatingPanel extends React.PureComponent {
    static contextType = UserContext;

    static propTypes = {
        brewId: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
    }

    rateItem = (value) => {
        return {
            userId: this.context.userId,
            brewId: this.props.brewId,
            value
        };
    }

    increaseRating = async () => {
        serviceWrapper.callService(brewingService.rate, this.rateItem(1), null);
    }

    decreaseRating = async () => {
        serviceWrapper.callService(brewingService.rate, this.rateItem(-1), null);
    }

    render() {
        const { brewId, rating } = this.props;

        if (brewId) {
            return (
                <div className="rating-panel">
                    <h2 className="rating-panel__title">Rating</h2>
                    <div>
                        <button type="button" className="rating-panel__button" onClick={this.decreaseRating}>
                            <Icon icon={minus} iconClassName="rating-panel__button-icon" />
                        </button>
                        <span className="rating-panel__value">{rating}</span>
                        <button type="button" className="rating-panel__button" onClick={this.increaseRating}>
                            <Icon icon={plus} iconClassName="rating-panel__button-icon" />
                        </button>
                    </div>
                </div>
            );
        }

        return null;
    }
}
