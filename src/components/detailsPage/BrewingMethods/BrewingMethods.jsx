import React from 'react';
import PropTypes from 'prop-types';

import './brewingMethods.scss';

export default class BrewingMethods extends React.PureComponent {
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

    render() {
        const { method } = this.props;

        const mashValues = method.mash_temp.map((item, index) => {
            return (
                <p key={index}>
                    {item.duration} minutes at {item.temp.value}° {item.temp.unit === 'celsius' ? 'C' : 'F'}
                </p>
            );
        });

        return (
            <div className="brewing-methods">
                <h2 className="brewing-methods__title">Method</h2>
                <div>
                    <h3 className="brewing-methods__subtitle">Mash</h3>
                    {mashValues}
                    <h3 className="brewing-methods__subtitle">Fermentation</h3>
                    <p>
                             Perform at {method.fermentation.temp.value}° {method.fermentation.temp.unit === 'celsius' ? 'C' : 'F'}
                    </p>
                    {method.twist && (
                        <>
                            <h3 className="brewing-methods__method-subtitle">Twist</h3>
                            <p className="brewing-methods__method-values">
                                {method.twist}
                            </p>
                        </>
                    )}
                </div>
            </div>
        );
    }
}
