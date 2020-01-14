import React from 'react';
import PropTypes from 'prop-types';

import './pagingPanel.scss';

export default class PagingPanel extends React.Component {
    static propTypes = {
        onPageNumberClick: PropTypes.func.isRequired,
        pageNumbers: PropTypes.array.isRequired,
        contentArrayLength: PropTypes.number.isRequired
    };

    renderPagingPanel(pageNumbers) {
        return pageNumbers.map((number) => (

            <li
                key={number}
                id={number}
            >
                <button
                    type="button"
                    onClick={this.props.onPageNumberClick}
                    className="paging-panel__item"
                    id={number}
                    key={number}
                >
                    {number}
                </button>
            </li>
        ));
    }

    render() {
        const { pageNumbers, onPageNumberClick, contentArrayLength } = this.props;
        return (
            <ul className="paging-panel">
                <li
                    id={1}
                    key={1}
                >
                    <button
                        type="button"
                        onClick={onPageNumberClick}
                        className="paging-panel__item"
                        id={1}
                        key={1}
                    >
                                &laquo;
                    </button>
                </li>
                {this.renderPagingPanel(pageNumbers)}
                <li
                    id={Math.ceil(contentArrayLength / 5)}
                    key={Math.ceil(contentArrayLength / 5)}
                >
                    <button
                        type="button"
                        onClick={onPageNumberClick}
                        className="paging-panel__item"
                        key={Math.ceil(contentArrayLength / 5)}
                        id={Math.ceil(contentArrayLength / 5)}
                    >
                                &raquo;
                    </button>
                </li>
            </ul>
        );
    }
}
