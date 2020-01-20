import React from 'react';
import PropTypes from 'prop-types';

import './brewingMethodsBlock.scss';

export default class BrewingMethodsBlock extends React.PureComponent {
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
            <div className="brewing-method-block">
                <h2 className="brewing-method-block__title">Method</h2>
                <div>
                    <h3 className="brewing-method-block__subtitle">Mash</h3>
                    <div className="brewing-method-block__values">
                        { mashValues}
                    </div>
                    <h3 className="brewing-method-block__subtitle">Fermentation</h3>
                    <div className="brewing-method-block__values">
                        <p>
                             Perform at {method.fermentation.temp.value}° {method.fermentation.temp.unit === 'celsius' ? 'C' : 'F'}
                        </p>
                    </div>
                    {method.twist && (
                        <div>
                            <h3 className="brewing-method-block__subtitle">Twist</h3>
                            <p className="brewing-method-block__values">
                                {method.twist}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
