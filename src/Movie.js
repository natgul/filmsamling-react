import React from 'react';

export default function Movie(props){
    function showStars(numberStars) {
        let stars = [];

        for (var i = 0; i < numberStars; i++) {
            stars.push(<img src="/star.png"/>);
        }

        return stars;
    }

    return (
        <li className='list-group-item'>
            { props.item.title }
            {showStars(props.item.rating)}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
        </li>
    )
}