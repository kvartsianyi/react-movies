import {GET_MOVIES, GET_GENRES} from "../action-types";

const initialState = {
    moviesList: [],
    genresList: []
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, moviesList: action.payload};
        case GET_GENRES:
            return {...state, genresList: action.payload};
        default:
            return state;
    }
};