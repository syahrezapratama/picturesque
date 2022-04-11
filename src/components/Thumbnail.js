import React from 'react';
import { Link } from 'react-router-dom';

export default function Thumbnail(props) {
    return (
        <div className='thumbnail' id={props.id}>
            <Link to={`/${props.id}`}>
                <img src={props.url} alt='' />
            </Link>
        </div>
        
    )
}