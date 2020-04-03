import React, {Component} from 'react';
import {MoviesListWithRedux} from "../../components/MoviesList/MoviesList";

export class MoviesPage extends Component {
    render() {
        return (
            <div className={`container d-flex flex-wrap py-3`}>
                <MoviesListWithRedux />
            </div>
        );
    }
};