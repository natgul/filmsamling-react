import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First Movie"
    }]);
    const inputRef = useRef();
    const ratingRef = useRef();

    function addMovie() {
        const title = inputRef.current.value;
        const rating = ratingRef.current.value;
        console.log(rating);
        if (title != "") {
            if (rating >= 1 && rating <= 5) {
                console.log('lägger till en film');
                const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
                setMovies([...movies, {
                    id: newId,
                    title: inputRef.current.value,
                    rating: ratingRef.current.value,
                }])
                inputRef.current.value = "";
                ratingRef.current.value = 0;
            }else {
                alert('Ange betyg!')
            }
        }else {
            alert('Ange titel!');
        }
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id != id));
    }

    return (
        <div>
            <input className="form-control" id="inputTitle" ref={inputRef} placeholder="Add New Movie" />
            <label htmlFor="rating-field" id="ratings">Betyg:</label>

            <select type="text" id="rating-field" ref={ratingRef} className="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button class="btn btn-primary" onClick={addMovie}>Lägg till film</button>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
        </div>
        
    )
}