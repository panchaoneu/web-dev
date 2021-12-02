import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    const [movies,setMovies] = useState([]);
    const [movie, setMovie] = useState({title:'', rating:2.5});
    const onMovieTitleChange = (event) => {
    setMovie({...movie, title:event.target.value});}
    const createMovieClickHandler = () =>
        fetch('http://localhost:4000/api/movies',{
        method:'POST',
        body: JSON.stringify(movie),
        headers:{
            'content-type':'application/json'
        }
    })
        .then(response=>response.json())
        .then(movies=>setMovies(movies));

    useEffect(() =>
        {fetch('http://localhost:4000/api/movies')
        .then(response => response.json())
        .then(movies => setMovies(movies))}
            , []);

    const deleteMovie = (movie) =>{
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    const saveMovie=()=>{
        console.log('inside save ');
        fetch(`http://localhost:4000/api/movies/${movie._id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(movie)
        })
            .then(response=>response.json())
            .then(movies=>setMovies((movies)));
    }

    return(
        <div>
            <h2>Movies</h2>
            <div>
                <input className="form-control" value={movie.title}
                       onChange={onMovieTitleChange}
                       style={{width: "70%"}}/>

                <button onClick={createMovieClickHandler}
                        className="btn btn-success float-end ">
                    Create
                </button>
            </div>
            <br/>
            <br/>

            <ul className="list-group">
                {
                        movies.map((movie) =>
                        <li className="list-group-item" key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={()=>deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                            <button onClick={()=> setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>
                            <button onClick={saveMovie}
                                    className="btn btn-primary ms-2 float-end ">
                                Save
                            </button>

                        </li>

                    )
                }
            </ul>
        </div>
    );
};
export default MovieApiClient;
