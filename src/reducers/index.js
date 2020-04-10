import {
    GET_MOVIES,
    GET_GENRES,
    IS_LOADING_MOVIES,
    CHANGE_PAGE,
    GET_MOVIES_WITH_GENRE,
    IS_LOADING_MOVIE, GET_MOVIE, CHANGE_THEME
} from "../action-types";
import {THEME_DARK, THEME_LIGHT} from "../constants";

const initialState = {
    page: 1,
    totalResults: 0,
    totalPages: 0,
    singleMovie: null,
    moviesList: [],
    isLoadingMovies: false,
    isLoadingMovie: false,
    genresList: [],
    theme: THEME_LIGHT
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            const {page, total_pages, total_results, results} = action.payload;
            return {
                ...state,
                moviesList: results,
                totalPages: total_pages,
                totalResults: total_results,
                page
            };
        case GET_MOVIE:
            return {
                ...state,
                singleMovie: action.payload
            };
        case GET_GENRES:
            return {...state, genresList: action.payload};
        case CHANGE_PAGE:
            return {...state, page: action.payload};
        case GET_MOVIES_WITH_GENRE:
            return {
                ...state,
                moviesList: state.moviesList.filter((movie) => movie.genre_ids.includes(action.payload))
            };
        case IS_LOADING_MOVIES:
            return {...state, isLoadingMovies: action.payload};
        case IS_LOADING_MOVIE:
            return {...state, isLoadingMovie: action.payload};
        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === THEME_LIGHT ?
                    THEME_DARK :
                    THEME_LIGHT
            };
        default:
            return state;
    }
};
