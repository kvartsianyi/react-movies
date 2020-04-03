import React from 'react';
import './MoviesListCard.scss';
import {PosterPreview} from "../PosterPreview/PosterPreview";

import user from '../../assets/images/user-avatar.png';

const CN = 'movie-card';

export const MoviesListCard = (props) => {

    const {title, overview, release_date, vote_average,poster_path: posterPath} = props.movie;
    const year = release_date.split('-')[0];

    return (
        <div className={CN}>
            <div className={`${CN}_poster`}>
                <PosterPreview path={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title}/>
                <div className={`${CN}_poster_selected`}>Show details</div>
            </div>
            <div className={`${CN}_info`}>
                <div className={`${CN}_info_text`}>
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </div>
                <div className={`${CN}_meta`}>
                    <hr/>
                    <div className={`d-flex justify-content-between`}>
                        <span className={`${CN}_meta_rating`}>IMDB: {vote_average}</span>
                        <span className={`${CN}_meta_year`}>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};