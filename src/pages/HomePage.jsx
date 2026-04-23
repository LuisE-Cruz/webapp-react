import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

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
                        <div key={index} className="col g-3">
                            <div className="card h-100 mx-auto text-center text-info bg-dark" style={{ width: "18rem" }}>
                                <img src={`http://127.0.0.1:3010/${movie.image}`} className="card-img-top h-100" alt={movie.title} />
                                <div className="card-body text-white">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <div className="card-text"><span className="text-info"> Genre:</span> {movie.genre} </div>
                                    <div className="card-text"><span className="text-info"> Year:</span> {movie.release_year} </div>
                                    <div className="card-text"><span className="text-info"> Director:</span> {movie.director} </div>
                                    <Link to={`/movies/${movie.id}`} className="text-white btn btn-outline-info px-3 py-1 border-2 mt-1">View details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}