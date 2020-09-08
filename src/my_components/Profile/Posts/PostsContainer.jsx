import React from 'react';
import Posts from "./Posts";
import { addPostActionCreator, updateTmpTextActionCreator } from './../../../redux/profilePageReducer.js';

// this component is a wrapper for Posts component
// and it is allowed to do some logic operations 
// whereas Posts component is not.
const PostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeText = (text) => {
        let action = updateTmpTextActionCreator(text);
        props.dispatch(action);
    }

    return (<Posts posts={props.profileState.posts} tmpPostText={props.profileState.tmpNewPostText}
        addPost={addPost} changeText={changeText} />);
}

export default PostsContainer;
