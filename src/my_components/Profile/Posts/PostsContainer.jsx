import React from 'react';
import Posts from "./Posts";
import { addPostActionCreator, updateTmpTextActionCreator } from './../../../redux/profilePageReducer.js';
import StoreContext from '../../../storeContext';

// this component is a Container Component for Posts Component
// and it is allowed to communicate with store and dispatch(business logic)
// whereas Posts component is not.
const PostsContainer = (props) => {

    return (
        // using the store from common context
        <StoreContext.Consumer> 
        {
            (store) => {
                let state = store.getState().profilePageState;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
            
                let changeText = (text) => {
                    let action = updateTmpTextActionCreator(text);
                    store.dispatch(action);
                }

                return (<Posts posts={state.posts}
                       tmpPostText={state.tmpNewPostText}
                       addPost={addPost} changeText={changeText} />)
            }
        }
        </StoreContext.Consumer>
    );
}

export default PostsContainer;
