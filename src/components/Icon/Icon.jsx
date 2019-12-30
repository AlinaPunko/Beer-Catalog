import React from 'react';

export default function Icon({ id, viewBox, className = 'icon' }) {
  return (
    <svg className={className} viewBox={viewBox}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}
