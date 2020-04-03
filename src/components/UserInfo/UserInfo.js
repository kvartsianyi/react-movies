import React from 'react';
import userAvatar from "../../assets/images/user-avatar.png";

import './UserInfo.scss';

const CN = 'user';

export const UserInfo = (props) => {
    return (
        <div className={`${CN} d-flex align-items-center`}>
            <div className={`${CN}_avatar`}>
                <img src={userAvatar} alt="user-avatar"/>
            </div>
            <span className={`${CN}_info`}>Welcome John</span>
        </div>
    );
};