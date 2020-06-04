import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import TopImage from './TopImage/TopImage'

const Profile = () => {
    return (
        <div className={s.profile}>
            <TopImage/>
            <div>ava + description</div>
            <Posts/>
        </div>
    );
}

export default Profile;