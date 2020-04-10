import React from 'react';
import {PosterPreview} from "../PosterPreview/PosterPreview";

import './MovieDetails.scss';
import StarRatings from "react-star-ratings";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {THEME_DARK} from "../../constants";

const CN = 'movie';

export const MovieDetails = (props) => {

    if(!props.movie){
        return (<div>No movie</div>);
    }

    const {theme} = props;

    const {
        title,
        poster_path: posterPath,
        overview, vote_average,
        genres,
        release_date: date,
        production_countries: countries,
        runtime,
        spoken_languages: languages,
        production_companies: companies,
        homepage
    } = props.movie;


    return (
        <div className={`d-flex flex-wrap`}>
            <div className={`col-xl-3 col-lg-4 col-12`}>
                <div className={`${CN}_poster`}>
                    <PosterPreview path={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title}/>
                </div>
                <div className={`${CN}_rating ${theme === THEME_DARK ? `bg-dark text-light` : ''}`}>
                    <span>Rating:</span>
                    <StarRatings
                        rating={vote_average/2}
                        starRatedColor="#e84124"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="5px"
                    />
                </div>
            </div>
            <div className={`col-xl-9 col-lg-8 col-12`}>
                <div className={`${CN}_info ${theme === THEME_DARK ? `bg-dark text-light` : ''} p-md-5 p-3 mt-lg-0 mt-3`}>
                    <h2 className={`title mb-4`}>{title}</h2>
                    <div className={`my-4`}>{overview}</div>
                    <div className={`label my-3`}><span>Companies:</span>
                        {
                            companies.map(({id,name}) => (<div className={`d-inline mx-2`} key={id}>{name}</div>))
                        }
                    </div>
                    <div className={`label my-3`}><span>Release date:</span> {date.split('-').reverse().join('.')}</div>
                    <div className={`label my-3`}><span>Runtime:</span> {runtime} min.</div>
                    <div className={`label my-3`}><span>Languages:</span>
                        {
                            languages.map(({name}, ind) => (<div className={`d-inline mx-2`} key={ind}>{name}</div>))
                        }
                    </div>
                    <div className={`label my-3`}><span>Genres:</span>
                        {
                            genres.map(({id, name}) => (<GenreBadge key={id} name={name}/>))
                        }
                    </div>
                    <div className={`label my-3`}><span>Countries:</span>
                        {
                            countries.map(({name}, ind) => (<div key={ind} className={`d-inline mx-2`}>{name}</div>))
                        }
                    </div>
                    <div className={`label my-3`}><span>Link: </span><a href={`${homepage}`} target={`_blank`}>{homepage}</a></div>
                </div>
            </div>
        </div>
    );
};
