import {batch} from 'react-redux';
import {GET_MOVIES, IS_LOADING_MOVIES, CHANGE_PAGE} from "../action-types";
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
