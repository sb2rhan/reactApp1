import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx'

const Posts = (props) => {

    let messagesElements = props.posts
        .map( m => <Post message={m.message} likes={m.likesCount}/> );

    let newPostText = React.createRef();

    let onAddPost = () => {
        let text = newPostText.current.value;
        props.addPost(text);
        newPostText.current.value = "";
    }
    
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div className="newPost">
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div>
              {messagesElements}
            </div>
        </div>
    );
}

export default Posts;
