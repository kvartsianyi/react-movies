import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {MoviesPageWithRedux} from "./containers/MoviesPage/MoviesPage";

function App() {
  return (
    <>
        <Header />
        <Switch>
            <Route exact path={`/`}>
                <MoviesPageWithRedux/>
            </Route>
        </Switch>
    </>
  );
}

export default App;
