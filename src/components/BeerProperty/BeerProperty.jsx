import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

import './beerProperty.scss';
import infoIcon from 'styles/icons/info.svg';


export default class BeerProperty extends React.PureComponent {
    static propTypes={
        propertyAcronym: PropTypes.string.isRequired,
        propertyName: PropTypes.string.isRequired,
        propertyValue: PropTypes.number.isRequired
    }

    render() {
        const { propertyAcronym, propertyName, propertyValue } = this.props;
        return (
            <li>
                <div className="beer-property">
                    <div className="beer-property__acronym">
                        {propertyAcronym}
                    </div>
                    <Icon icon={infoIcon} iconClassName="beer-property__info-icon" />
                    <div className="beer-property__value">{propertyValue}</div>
                </div>
            </li>

        );
    }
}
