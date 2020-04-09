import React from 'react';
import {GenreBadge} from "../GenreBadge/GenreBadge";

const CN = 'genres-panel';

export const GenrePanel = (props) => {
    const {genres, page, onClick} = props;

    return (
        <div className={CN}>
            {
                genres.map(({id, name}) => <GenreBadge key={id} name={name} onClick={() => onClick(page, id)}/>)
            }
        </div>
    );
};
