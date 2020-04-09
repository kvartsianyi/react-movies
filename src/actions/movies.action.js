import {batch} from 'react-redux';
import {
    GET_MOVIES,
    IS_LOADING_MOVIES,
    CHANGE_PAGE,
    GET_MOVIES_WITH_GENRE,
    IS_LOADING_MOVIE,
    GET_MOVIE
} from "../action-types";
import {API_KEY} from "../constants";

export const createGetMoviesAction = (payload) => {
    return {type: GET_MOVIES, payload};
};

export const createIsLoadingMoviesAction = (payload) => {
    return {type: IS_LOADING_MOVIES, payload};
};

export const getMovies = (page = 1) => (dispatch) => {
    dispatch(createIsLoadingMoviesAction(true));

    return fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log('fetching movies');
            batch(() => {
                dispatch(createIsLoadingMoviesAction(false));
                dispatch(createGetMoviesAction(data));
            })
        })
        .catch(error => {
            dispatch(createIsLoadingMoviesAction(false));
            console.log(error)
        });
};

export const createChangePageAction = (payload) => {
    return {type: CHANGE_PAGE, payload};
};

export const createGetMoviesWithGenreAction = (payload) => {
    return {type: GET_MOVIES_WITH_GENRE, payload};
};

export const getMoviesWithGenre = (page = 1, genreId) => (dispatch) => {
    dispatch(createIsLoadingMoviesAction(true));

    return fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genreId}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log('fetching movies');
            batch(() => {
                dispatch(createIsLoadingMoviesAction(false));
                dispatch(createGetMoviesAction(data));
            })
        })
        .catch(error => {
            dispatch(createIsLoadingMoviesAction(false));
            console.log(error)
        });
};


export const createGetMovieAction = (payload) => {
    return {type: GET_MOVIE, payload};
};

export const createIsLoadingMovieAction = (payload) => {
    return {type: IS_LOADING_MOVIE, payload};
};

export const getMovie = (movieId) => (dispatch) => {
    dispatch(createIsLoadingMovieAction(true));

    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log('fetching movie');
            batch(() => {
                dispatch(createIsLoadingMovieAction(false));
                dispatch(createGetMovieAction(data));
            })
        })
        .catch(error => {
            dispatch(createIsLoadingMovieAction(false));
            console.log(error)
        });
};


