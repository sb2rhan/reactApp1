import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;