import React from 'react';
import faker from 'faker';

let CommentDetail = props => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatarImage} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at {props.timeAgo}</span>
                </div>
                <div className="text">{faker.random.words()}</div>
            </div>
        </div>
    );
}

export default CommentDetail;