import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import './beerPropertyItem.scss';
import infoIcon from 'styles/icons/info.svg';


export default class BeerPropertyItem extends React.PureComponent {
    static propTypes={
        propertyAcronym: PropTypes.string.isRequired,
        propertyName: PropTypes.string.isRequired,
        propertyValue: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { isTooltipVisible: false };
    }

    toggleTooltipVisibility = () => {
        this.setState({ isTooltipVisible: !this.state.isTooltipVisible });
    }

    render() {
        const { propertyAcronym, propertyName, propertyValue } = this.props;
        const tooltipClass = classNames({
            'beer-property_item__name--visible': this.state.isTooltipVisible,
            'beer-property_item__name--hidden': !this.state.isTooltipVisible
        });
        return (
            <li className="beer-property-item">
                <div className="beer-property-item__property">
                    <span className="beer-property-item__acronym">
                        {propertyAcronym}
                    </span>
                    <div onMouseOver={this.toggleTooltipVisibility} onMouseOut={this.toggleTooltipVisibility}>
                        <Icon icon={infoIcon} iconClassName="beer-property-item__info-icon" />
                    </div>
                    <span className={tooltipClass}>
                        {propertyName}
                    </span>
                    <span className="beer-property-item__property-value">{propertyValue}</span>
                </div>
            </li>

        );
    }
}
