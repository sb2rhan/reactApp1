import React from 'react';
import s from './TopImage.module.css';

const TopImage = () => {
    return (
        <div className={s.topImage}>
            <img alt="topImg" src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"/>
        </div>
    );
}

export default TopImage;