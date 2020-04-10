import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {connect} from "react-redux";
import {HeaderWithRedux as Header} from "./components/Header/Header";
import {MoviesPageWithRedux} from "./containers/MoviesPage/MoviesPage";
import {MovieDetailsPageWithRedux} from "./containers/MovieDetailsPage/MovieDetailsPage";
import {THEME_DARK} from "./constants";

import './App.scss'

function App(props) {
    const {theme} = props;

  return (
    <div className={`page-wrap ${theme === THEME_DARK ? 'bg-darker' : ''}`}>
        <Header />
        <Switch>
            <Route exact path={`/`}>
                <MoviesPageWithRedux/>
            </Route>
            <Route exact path={`/:movieId`}>
                <MovieDetailsPageWithRedux/>
            </Route>
        </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    };
};

export const AppWithRedux = connect(mapStateToProps)(App);
