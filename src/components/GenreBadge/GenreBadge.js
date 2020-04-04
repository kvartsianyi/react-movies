import React from 'react';
import { Badge } from 'reactstrap';
import './GenreBadge.scss';

const CN = 'genre-badge';

export const GenreBadge = (props) => {

    const {name} = props;

    return (
        <div className={CN}>
            <Badge href={`#`} className={`m-1`} color={`light`}>{name}</Badge>
        </div>
    );
};