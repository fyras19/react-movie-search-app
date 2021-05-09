import React, {useState} from 'react';

import './searchMovie.css'
import MovieCard from './movieCard';

export default function SearchMovie() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        //const query = "The Social Network"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=0e18e9be35e51aac5589fd6e348d461e&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }
        catch(err){
            console.error(err);
        }
    };

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input type="type" name="query" value={query} placeholder="i.e The Social Network" className="input" onChange={(e)=>setQuery(e.target.value)}/>
                <button type="submit" className="button">Submit</button>
            </form>
            <div className="card-list">
                {movies.filter((movie) => movie.poster_path).map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}