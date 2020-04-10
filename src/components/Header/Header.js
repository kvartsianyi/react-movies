import React from 'react';
import {UserInfo} from "../UserInfo/UserInfo";
import { useHistory } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './Header.scss'

const CN = 'header';

export const Header = (props) => {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    return (
        <div className={CN}>
            <div className={`container`}>
                <div className="row">
                    <div className={`${CN}_logo col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 order-md-1 order-2 d-flex justify-content-md-start justify-content-center align-items-center`} onClick={goHome}>
                        <img className={`${CN}_logo_img`} src={logo} alt="pinball"/>
                        <div className={`pl-2`}>
                            <h3 className={`${CN}_logo_title`}>Movies</h3>
                            <span className={`${CN}_logo_description`}>Best collection</span>
                        </div>
                    </div>
                    <div className={`col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3 order-md-2 order-1 d-flex justify-content-md-center justify-content-sm-start align-items-center`}>
                        <div className={`${CN}_burger_btn`}>
                            <span></span>
                        </div>
                    </div>
                    <div className={`col-xl-5  col-lg-5 col-md-4 col-sm-3 col-3 order-3 d-flex justify-content-center align-items-center`}>
                        <div className={`${CN}_search`}>
                            <input className={`${CN}_search_bar d-none d-md-block`} type="text"/>
                            <button className={`${CN}_search_btn`}></button>
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-3 order-12 d-none d-md-flex justify-content-end align-items-center`}>
                        <UserInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
