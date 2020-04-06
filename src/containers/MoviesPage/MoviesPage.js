import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

import {Pagination} from "../../components/Pagination/Pagination";
import {getMovies, createChangePageAction} from "../../actions/movies.action";
import {bindActionCreators} from "redux";
import {getGenres} from "../../actions/genre.action";
import {MoviesListWithRedux} from "../../components/MoviesList/MoviesList";
import {Loader} from "../../components/Loader/Loader";

import './MoviesPage.scss';


const CN = 'movies-page';

const MoviesPage = (props) => {
    const {search} = useLocation();
    const {page: currentPage} = queryString.parse(search);

    useEffect(() => {
        const {getMovies, getGenres} = props;
        getMovies(currentPage);
        getGenres();
    }, [currentPage]);


    const {isLoadingMovies, page, totalPages, changePage} = props;

    return (
        <div className={`container d-flex flex-wrap py-3`}>
            {
                isLoadingMovies ?
                    <div className={`${CN}_loader`}><Loader/></div> :
                    (
                        <>
                            <MoviesListWithRedux/>
                            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
                        </>
                    )

            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        page: state.page,
        totalPages: state.totalPages,
        isLoadingMovies: state.isLoadingMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovies,
        getGenres,
        changePage: createChangePageAction
    }, dispatch);
};

export const MoviesPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
