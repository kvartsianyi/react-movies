import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMovies} from "../../actions";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import './MoviesList.scss';

const CN = 'movies-list';

const MoviesList = (props) => {

    useEffect(() => {
        props.getMovies();
    }, []);

    const {movies} = props;

    return (
        <>
            {movies.map((movie) => (
                <div key={movie.id} className={`col-3 py-2 px-1 ${CN}_card`}>
                    <MoviesListCard movie={movie}/>
                </div>
            ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.moviesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovies
    }, dispatch);
};

export const MoviesListWithRedux = connect(mapStateToProps, mapDispatchToProps)(MoviesList);