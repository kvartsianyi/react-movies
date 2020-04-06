import {GET_GENRES} from "../action-types";
import {API_KEY} from "../constants";

export const createGetGenresAction = (payload) => {
    return {type: GET_GENRES, payload};
};

export const getGenres = () => (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => dispatch(createGetGenresAction(data.genres)));
};

