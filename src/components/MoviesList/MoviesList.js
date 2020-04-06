import React from 'react';
import {connect} from 'react-redux';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import './MoviesList.scss';

const CN = 'movies-list';

const MoviesList = (props) => {
    const {movies, genres} = props;

    return (
        <>
            {movies.map((movie) => {
                const {genre_ids} = movie;

                const movieGenres = genres.filter((genre) => genre_ids.includes(genre.id));

                    return (
                    <div key={movie.id} className={`col-3 py-2 px-1 ${CN}_card`}>
                        <MoviesListCard movie={movie} genres={movieGenres}/>
                    </div>
                );
            }
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.moviesList,
        genres: state.genresList
    };
};


export const MoviesListWithRedux = connect(mapStateToProps)(MoviesList);
