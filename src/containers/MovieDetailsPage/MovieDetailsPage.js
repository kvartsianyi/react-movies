import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {MovieDetails} from "../../components/MovieDetails/MovieDetails";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getMovie} from "../../actions/movies.action";
import {Loader} from "../../components/Loader/Loader";

import './MovieDetailsPage.scss';

const CN = 'movie-details';

export const MovieDetailsPage = (props) => {
    const {movieId} = useParams();

    useEffect(() => {
        props.getMovie(movieId);
    }, []);

    const {isLoadingMovie, movie} = props;

    console.log(movie);

    return (
        <div className={`${CN} container d-flex py-3`}>
            {
                isLoadingMovie ?
                    <div className={`${CN}_loader`}><Loader /></div>:
                    <MovieDetails movie={movie}/>

            }

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        movie: state.singleMovie,
        isLoadingMovie: state.isLoadingMovie
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovie
    }, dispatch);
};


export const MovieDetailsPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
