import React from 'react';

import './pagingPanel.scss';

export default class PagingPanel extends React.PureComponent {
    constructor() {
        super();
        this.state = { pages: [1, 2, 3, 4, 5] };
    }

    render() {
        return (
            <ul className="paging-panel">
                <li className="paging-panel__item">&laquo;</li>
                {this.state.pages.map((pageNumber) => (<li className="paging-panel__item">{pageNumber}</li>))}
                <li className="paging-panel__item">&raquo;</li>
            </ul>
        );
    }
}
