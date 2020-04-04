import {GET_MOVIES, GET_GENRES} from "../action-types";
import {API_KEY} from "../constants";

export const createGetMoviesAction = (payload) => {
    return {type: GET_MOVIES, payload};
};

export const getMovies = () => (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => dispatch(createGetMoviesAction(data.results)));
};

export const createGetGenresAction = (payload) => {
    return {type: GET_GENRES, payload};
};

export const getGenres = () => (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => dispatch(createGetGenresAction(data.genres)));
};