import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>Background image</div>
            <div>ava + description</div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    1 post
                </div>
                <div>
                    2 post
                </div>
            </div>
        </div>
    );
}

export default Profile;