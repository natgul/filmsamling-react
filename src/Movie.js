import React from 'react';
import './App.css';

export default function Movie(props){
    //For every grade a star is returned
    function showStars(numberStars) {
        let stars = [];

        for (var i = 0; i < numberStars; i++) {
            stars.push(<img src="/star.png"/>);
        }

        return stars;
    }

    return (
        //Prints stars and delete-button
        <li className='list-group-item bg-light bg-gradient m-1'>
            { props.item.title }
            <img className="cross" src="./delete.png" onClick={() => {props.deleteMovie(props.item.id)}}></img>
            {showStars(props.item.rating)}
        </li>
    )
}

