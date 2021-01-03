import React from 'react';
import Posts from "./Posts";
import { addPostActionCreator, updateTmpTextActionCreator } from './../../../redux/profilePageReducer.js';

// this component is a Container Component for Posts Component
// and it is allowed to communicate with store and dispatch(business logic)
// whereas Posts component is not.
const PostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeText = (text) => {
        let action = updateTmpTextActionCreator(text);
        props.dispatch(action);
    }

    return (<Posts posts={props.profileState.posts}
        tmpPostText={props.profileState.tmpNewPostText}
        addPost={addPost} changeText={changeText} />);
}

export default PostsContainer;
