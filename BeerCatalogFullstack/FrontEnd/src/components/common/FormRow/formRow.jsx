import React from 'react';
import PropTypes from 'prop-types';

import './formRow.scss';

export default class FormRow extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        const {
            label,
            name,
            type,
            value,
            onChange
        } = this.props;
        return (
            <div className="form-row">
                <label className="form-row__title">{label}</label>
                <input
                    name={name}
                    type={type}
                    value={value}
                    className="form-row__input"
                    onChange={onChange}
                />
            </div>
        );
    }
}
