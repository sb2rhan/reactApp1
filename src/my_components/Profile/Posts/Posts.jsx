import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <Post message="Hi, how are you guys?" likes="23"/>
            <Post message="The guy who wrote this is my brother" likes="34"/>
            <Post message="Hello, World!" likes="2"/>
            <Post message="Welcome to your first post." likes="10"/>
        </div>
    );
}

export default Posts;