import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/Icon';
import Tooltip from 'components/common/Tooltip/Tooltip';

import './beerPropertyItem.scss';
import infoIcon from 'styles/icons/info.svg';


export default class BeerPropertyItem extends React.PureComponent {
    static propTypes={
        acronym: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { isTooltipVisible: false };
    }

    toggleTooltipVisibility = () => {
        this.setState({ isTooltipVisible: !this.state.isTooltipVisible });
    }

    render() {
        const { acronym, name, value } = this.props;
        return (
            <li className="beer-property-item beer-property-item__property">
                <span className="beer-property-item__acronym">
                    {acronym}
                </span>
                <div onMouseOver={this.toggleTooltipVisibility} onMouseOut={this.toggleTooltipVisibility}>
                    <Icon icon={infoIcon} iconClassName="beer-property-item__info-icon" />
                </div>
                <Tooltip text={name} isShown={this.state.isTooltipVisible} />
                <span className="beer-property-item__property-value">{value}</span>
            </li>

        );
    }
}
