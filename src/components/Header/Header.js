import React from 'react';
import {UserInfo} from "../UserInfo/UserInfo";
import { useHistory } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './Header.scss'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {THEME_DARK} from "../../constants";
import {createChangeThemeAction} from "../../actions/theme.action";

const CN = 'header';

const Header = (props) => {
    const {theme, changeTheme} = props;

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    return (
        <div className={`${CN} ${theme === THEME_DARK ? `${CN}_darker` : ''}`}>
            <div className={`container`}>
                <div className="row">
                    <div className={`${CN}_logo col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 order-md-1 order-2 d-flex justify-content-md-start justify-content-center align-items-center`} onClick={goHome}>
                        <img className={`${CN}_logo_img`} src={logo} alt="pinball"/>
                        <div className={`pl-2`}>
                            <h3 className={`${CN}_logo_title ${theme === THEME_DARK ? 'text-light' : ''}`}>Movies</h3>
                            <span className={`${CN}_logo_description ${theme === THEME_DARK ? 'text-light' : ''}`}>Best collection</span>
                        </div>
                    </div>
                    <div className={`col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 order-md-2 order-1 d-flex justify-content-xl-center justify-content-sm-start align-items-center`}>
                        <div className={`${CN}_burger_btn ${theme === THEME_DARK ? 'bg-dark text-light' : ''} py-2 px-3 `} onClick={changeTheme}>
                            <span>{theme === THEME_DARK ? 'Dark' : 'Light'}</span>
                        </div>
                    </div>
                    <div className={`col-xl-5  col-lg-4 col-md-4 col-sm-3 col-3 order-3 d-flex justify-content-center align-items-center`}>
                        <div className={`${CN}_search`}>
                            <input className={`${CN}_search_bar d-none d-md-block`} type="text"/>
                            <button className={`${CN}_search_btn`}></button>
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-3 order-12 d-none d-md-flex justify-content-end align-items-center`}>
                        <UserInfo theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeTheme: createChangeThemeAction
    }, dispatch);
};

export const HeaderWithRedux = connect(mapStateToProps, mapDispatchToProps)(Header);
