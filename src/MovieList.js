import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const[movies, setMovies] = useState([{
        id: 1,
        title: "First Movie"
    }]);
    const inputRef = useRef();

    return (
        <div>
            <input className="form-control" placeholder="Add New Movie"/>
            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} /> )}
            </ul> 
        </div>
    )
}