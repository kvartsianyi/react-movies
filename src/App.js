import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {MoviesPage} from "./containers/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <Header />
      <MoviesPage />
    </>
  );
}

export default App;
