import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="6:00PM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Criss" timeAgo="4:50AM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Samy" timeAgo="3:00PM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);