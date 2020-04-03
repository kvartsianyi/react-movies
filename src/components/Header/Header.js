import React from 'react';
import logo from '../../assets/images/logo.png';
import userAvatar from '../../assets/images/user-avatar.png';
import './Header.scss'
import {UserInfo} from "../UserInfo/UserInfo";

const CN = 'header';

export const Header = (props) => {
    return (
        <div className={CN}>
            <div className={`container`}>
                <div className="row">
                    <div className={`${CN}_logo col-2 d-flex align-items-center`}>
                        <img className={`${CN}_logo_img`} src={logo} alt="pinball"/>
                        <div className={`pl-2`}>
                            <h3 className={`${CN}_logo_title`}>Pinball</h3>
                            <span className={`${CN}_logo_description`}>The grid theme</span>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center col-2`}>
                        <div className={`${CN}_burger_btn`}>
                            <span></span>
                        </div>
                    </div>
                    <div className={`col-5 d-flex justify-content-center align-items-center`}>
                        <div className={`${CN}_search`}>
                            <input className={`${CN}_search_bar`} type="text"/>
                            <button className={`${CN}_search_btn`}></button>
                        </div>
                    </div>
                    <div className={`col-3 d-flex justify-content-end align-items-center`}>
                        <UserInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}