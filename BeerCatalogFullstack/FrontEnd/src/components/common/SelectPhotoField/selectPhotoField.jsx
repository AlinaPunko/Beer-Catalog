import React from 'react';
import PropTypes from 'prop-types';

import './selectPhotoField.scss';

export default class SelectPhotoField extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="select-photo-field">
                <label className="select-photo-field__title">Select photo: </label>
                <input
                    name="photo"
                    type="file"
                    className="select-photo-field__input"
                    onChange={this.props.onChange}
                    accept="image/x-png,image/gif,image/jpeg"
                />
            </div>
        );
    }
}
