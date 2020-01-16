import React from 'react';
import PropTypes from 'prop-types';

import './brewingMethodsBlock.scss';

export default class BrewingMethodsBlock extends React.Component {
    static propTypes={
        method: PropTypes.shape({
            mash_temp: PropTypes.array.isRequired,
            fermentation: PropTypes.shape({
                temp: PropTypes.shape({
                    value: PropTypes.number.isRequired,
                    unit: PropTypes.string.isRequired
                }).isRequired
            }).isRequired,
            twist: PropTypes.string
        }).isRequired
    }

    getFermentationValue = (fermentationInfo) => {
        return (
            <p>
                Perform at
                {' '}
                {fermentationInfo.temp.value}
                °
                {fermentationInfo.temp.unit === 'celsius' ? 'C' : 'F'}
            </p>
        );
    }

    getMashValue = (mashInfo) => {
        return mashInfo.map((item) => {
            return (
                <p>
                    {item.duration}
                    {' '}
                    minutes at
                    {' '}
                    {item.temp.value}
                    °
                    {item.temp.unit === 'celsius' ? 'C' : 'F'}
                </p>
            );
        });
    }


    render() {
        const { method } = this.props;
        return (
            <div className="brewing-method-block">
                <h1 className="brewing-method-block__title">Method</h1>
                <div>
                    <h3 className="brewing-method-block__subtitle">Mash</h3>
                    <div className="brewing-method-block__mash">
                        {this.getMashValue(method.mash_temp)}
                    </div>
                    <h3 className="brewing-method-block__subtitle">Fermentation</h3>
                    <div className="brewing-method-block__fermentation">
                        {this.getFermentationValue(method.fermentation)}
                    </div>
                    {method.twist && (
                        <>
                            <h3 className="brewing-method-block__subtitle">Twist</h3>
                            <p className="brewing-method-block__twist">
                                {method.twist}
                            </p>
                        </>
                    )}
                </div>
            </div>
        );
    }
}
