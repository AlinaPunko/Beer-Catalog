import React from 'react';
import PropTypes from 'prop-types';

import brewingService from 'services/brewingService';
import serviceWrapper from 'helpers/serviceWrapper';
import { UserContext } from 'store/context/userContext';

import './commentsSection.scss';

export default class CommentsSection extends React.PureComponent {
    static propTypes = {
        brewId: PropTypes.number.isRequired
    }

    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    addComment = async () => {
        const comment = {
            brewId: this.props.brewId,
            userId: this.context.userId,
            text: this.state.message
        };

        await serviceWrapper.callService(brewingService.addComment, comment, null);
    }

    changeComment = (e) => {
        this.setState({ message: e.target.value });
    }

    loadComments = () => {

    }

    render() {
        return (
            <section className="comments-section">
                <h2 className="comments-section__title">Comments</h2>
                <textarea
                    onChange={this.changeComment}
                    value={this.state.message}
                    placeholder="Enter your opinion here"
                    className="comments-section__comment"
                />
                <div className="comments-section__buttons">
                    <button type="button" className="comments-section__button" onClick={this.addComment}>Add</button>
                    <button type="button" className="comments-section__button" onClick={this.loadComments}>Load new comments</button>
                </div>

            </section>
        );
    }
}
