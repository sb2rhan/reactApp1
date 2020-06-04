import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img alt="avatar" src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"/>
            <p>{props.message}</p>
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Post;