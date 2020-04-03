import {GET_MOVIES} from "../action-types";
import {API_KEY} from "../constants";

export const createGetMoviesAction = (payload) => {
    return {type: GET_MOVIES, payload};
};

export const getMovies = () => (dispatch) => {
    // return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=10738c2db3a49f6cda493020320e7b1f`)
        .then(res => res.json())
        .then(data => dispatch(createGetMoviesAction(data.results)));
};