import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([
        
    ]);
    const inputRef = useRef();
    const ratingRef = useRef();

    function addMovie() {
        const title = inputRef.current.value;
        const rating = ratingRef.current.value;
        console.log(rating);
        if (title != "") {
            //Validate input of title
            if (rating >= 1 && rating <= 5) {
                //Validate input of grade
                const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
                setMovies([...movies, {
                    //Adds movie to list 
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
        //Deletes clicked movie
        setMovies(movies.filter((item) => item.id != id));
    }

    function sortByAlpha() {
        //Sort by letter
        const sortedMovies = [...movies].sort((a, b) => {
            return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
        });

        setMovies(sortedMovies);
    }    

    function sortByRating(){
        //sort by rating
        const sortedMovies = [...movies].sort((a, b) => {
            return a.rating < b.rating ? 1 : -1;
        });

        setMovies(sortedMovies);
    }

    return (
        //Print inputs and list, including buttons
        <div>
            <label htmlFor="inputTitle" className="fw-bold Title mt-4">Titel:</label>
            <input className="form-control muted" id="inputTitle" ref={inputRef} placeholder="Lägg till Film" />
            <label htmlFor="rating-field" className="fw-bold ratings">Betyg:</label>

            <select type="text" id="rating-field" ref={ratingRef} className="bg-white form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="btn btn-success" onClick={addMovie}>Spara film</button>
            <h2>Inlagda filmer</h2>
            <ul className="list-group ">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
            <button className="btn btn-primary" onClick={sortByAlpha}>Alfabetisk ordning</button>
            <button className="btn btn-primary" onClick={sortByRating}>Betygordning</button>
        </div>
        
    )
}