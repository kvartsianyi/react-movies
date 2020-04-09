import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {MoviesPageWithRedux} from "./containers/MoviesPage/MoviesPage";
import {MovieDetailsPageWithRedux} from "./containers/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
        <Header />
        <Switch>
            <Route exact path={`/`}>
                <MoviesPageWithRedux/>
            </Route>
            <Route exact path={`/:movieId`}>
                <MovieDetailsPageWithRedux/>
            </Route>
        </Switch>
    </>
  );
}

export default App;
