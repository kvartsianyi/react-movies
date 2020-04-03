import {GET_MOVIES} from "../action-types";

const initialState = {
    moviesList: []
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, moviesList: action.payload};
        default:
            return state;
    }
};