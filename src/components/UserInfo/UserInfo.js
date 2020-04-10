import React from 'react';
import userAvatar from "../../assets/images/user-avatar.png";

import './UserInfo.scss';
import {THEME_DARK, THEME_LIGHT} from "../../constants";

const CN = 'user';

export const UserInfo = (props) => {
    const {theme = THEME_LIGHT} = props;

    return (
        <div className={`${CN} d-flex align-items-center`}>
            <div className={`${CN}_avatar`}>
                <img src={userAvatar} alt="user-avatar"/>
            </div>
            <span className={`${CN}_info ${theme === THEME_DARK ? 'text-light' : ''}`}>Welcome John</span>
        </div>
    );
};
