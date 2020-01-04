import React from 'react';

import './pagingPanel.scss';

export default class PagingPanel extends React.Component {
    constructor() {
        super();
        this.state = { pages: [1, 2, 3, 4, 5] };
    }

    render() {
        return (
            <ul className="paging-panel">
                <li className="paging-panel__item">&#171</li>
                {this.state.pages.map((pageNumber) => (<li className="paging-panel__item">{pageNumber}</li>))}
                <li className="paging-panel__item">&#187</li>
            </ul>
        );
    }
}
