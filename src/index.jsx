import 'regenerator-runtime/runtime';
import React from 'react';
import Reactdom from 'react-dom';

import App from 'components/App/App';

import 'styles/index.scss';

Reactdom.render(
    <App />,
    document.getElementById('app'),
);
