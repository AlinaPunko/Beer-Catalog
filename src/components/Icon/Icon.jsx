import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ id, viewBox, className = 'icon' }) {
    return (
        <svg className={className} viewBox={viewBox}>
            <use xlinkHref={`#${id}`} />
        </svg>
    );
}

Icon.propTypes = {
    id: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    className: PropTypes.string
};
