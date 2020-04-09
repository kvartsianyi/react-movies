import React from 'react';
import { Badge } from 'reactstrap';
import './GenreBadge.scss';

const CN = 'genre-badge';

export const GenreBadge = (props) => {

    const {name, onClick = () => {}} = props;

    return (
        <div className={CN}>
            <Badge className={`m-1`} color={`light`} onClick={onClick}>{name}</Badge>
        </div>
    );
};
