import React from 'react';
import {connect} from 'react-redux';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


import './MoviesList.scss';
import {bindActionCreators} from "redux";
import {createChangeThemeAction} from "../../actions/theme.action";

const CN = 'movies-list';

const MoviesList = (props) => {
    const {movies, genres, theme} = props;

    return (
        <>
            {movies.map((movie) => {
                const {genre_ids} = movie;

                const movieGenres = genres.filter((genre) => genre_ids.includes(genre.id));

                    return (
                    <div key={movie.id} className={`col-xl-3 col-lg-4 col-md-6 col-12 py-2 px-1 ${CN}_card`}>
                        <MoviesListCard movie={movie} genres={movieGenres} theme={theme}/>
                    </div>
                );
            }
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        movies: state.moviesList,
        genres: state.genresList
    };
};


export const MoviesListWithRedux = connect(mapStateToProps)(MoviesList);
