import React from 'react';
import './MoviesListCard.scss';
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import StarRatings from "react-star-ratings";

const CN = 'movie-card';

export const MoviesListCard = (props) => {

    const {genres} = props;
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
                    <hr/>
                    <div className={`${CN}_info_genres`}>
                        {
                            genres.map(({id, name}) => (<GenreBadge key={id} name={name}/>))
                        }
                    </div>
                    <p>{overview}</p>
                </div>
                <div className={`${CN}_meta`}>
                    <hr/>
                    <div className={`d-flex justify-content-between align-items-center`}>
                            <StarRatings
                                rating={vote_average/2}
                                starRatedColor="#e84124"
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="5px"
                            />
                        <span className={`${CN}_meta_year`}>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};