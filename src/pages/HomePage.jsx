import { useState, useEffect } from "react"


export default function HomePage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const api_url = import.meta.env.VITE_SERVER_API + "/movies";

        fetch(api_url)
            .then(response => response.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    movies.map((movie, index) => (
                        <div key={index} className="col">
                            <div className="card">
                                <img src={`http://127.0.0.1:3010/${movie.image}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <p className="card-text">{movie.director}, {movie.genre}, {movie.release_year}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}