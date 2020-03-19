import React from 'react';
import PropTypes from 'prop-types';
import * as signalR from '@aspnet/signalr';

import brewingService from 'services/brewingService';
import serviceWrapper from 'helpers/serviceWrapper';
import { UserContext } from 'store/context/userContext';
import CommentListItem from 'components/brewingInfoPage/CommentsListItem/commentsListItem';

import './commentsSection.scss';

export default class CommentsSection extends React.PureComponent {
    static propTypes = {
        brewId: PropTypes.number.isRequired
    }

    static contextType = UserContext;

    constructor(props) {
        super(props);
        const connection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:44376/commentsHub')
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.state = {
            message: '',
            currentComments: [],
            connection,
            getNewComments: false,
            newComment: null
        };
    }

    componentDidMount = () => {
        this.loadComments();

        this.state.connection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(() => console.log('Error while establishing connection :('));
        this.state.connection.on('addComment', (id, brewId, name, photo, text) => {
            if (brewId === this.props.brewId) {
                const comment = {
                    id,
                    userImage: photo,
                    userName: name,
                    text
                };

                this.setState({
                    getNewComments: true,
                    newComment: comment
                });
                debugger;
            }
        });
    }

    loadNewComment = () => {
        debugger;
        this.setState(
            {
                currentComments: this.state.currentComments.concat(this.state.newComment),
                newComment: null
            }
        );
        debugger;
        this.renderComments();
    }

    addComment = async () => {
        const comment = {
            brewId: this.props.brewId,
            userId: this.context.userId,
            text: this.state.message
        };

        this.state.connection
            .invoke('addComment', comment.brewId, comment.userId, comment.text)
            .catch((err) => console.error(err));
    }

    changeComment = (e) => {
        this.setState({ message: e.target.value });
    }

    loadComments = async () => {
        const result = await serviceWrapper.callService(brewingService.getComments, this.props.brewId, null);
        if (result) {
            this.setState({ currentComments: result });
        }
    }

    renderComments = () => {
        return this.state.currentComments.map((comment, index) => { return <CommentListItem index={index} comment={comment} />; });
    }

    render() {
        debugger;
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
                    {
                        this.state.getNewComments && (
                            <button type="button" className="comments-section__button" onClick={this.loadNewComment}>Load new comments</button>
                        )
                    }
                </div>
                <ul>
                    {this.renderComments()}
                </ul>
            </section>
        );
    }
}
