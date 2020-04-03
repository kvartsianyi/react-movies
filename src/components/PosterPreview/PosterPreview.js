import React from 'react';
import './PosterPreview.scss';

const CN = 'poster-preview';

export const PosterPreview = (props) => {
    const {path, alt} = props;
    return (
        <img className={CN} src={path} alt={alt}/>
    );
};