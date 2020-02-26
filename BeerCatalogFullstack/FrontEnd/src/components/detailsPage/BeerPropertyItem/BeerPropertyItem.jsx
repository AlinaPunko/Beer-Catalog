import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'components/common/Tooltip/tooltip';

import './beerPropertyItem.scss';


export default class BeerPropertyItem extends React.PureComponent {
    static propTypes={
        acronym: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }

    render() {
        const { acronym, name, value } = this.props;
        return (
            <li className="beer-property-item">
                <span className="beer-property-item__acronym">
                    {acronym}
                </span>
                <Tooltip text={name} />
                <span className="beer-property-item__property-value">{value}</span>
            </li>

        );
    }
}
