import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <img alt="avatar" src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi suscipit adipisci, illum deleniti natus omnis optio voluptate animi modi quis ipsum aliquam, ratione, officiis qui exercitationem eligendi assumenda eaque hic.
            </p>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;